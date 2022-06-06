import { el, setChildren } from 'redom';
import getAccount from '../serverFunctions/getAccount';
import createContainer from '../createContainer';
import createTop from './createTop';
import createMiddle from './createMiddle';
import createHystoryOfTransfers from './createHystoryOfTransfers';
import createChoices from '../createChoices';
import createChart from '../createChart';
import { createNewTransferForm, checkAmount } from './createNewTransferForm';
import createBalanceDynamicsBlock from './createBalanceDynamics';
import getMonthsBalances from '../getMonthsBalances';
import inputStatus from '../inputStatus';
import sendTransfer from '../serverFunctions/sendTransfer';
import openMessage from '../message/openMessage';
import { createSpinner, hideSpinner } from '../spinner/spinner';

function checkAccountSelect(str) {
  return /^\d+$/.test(str);
}

export default function openAccount(router, id) {
  const container = createContainer('account-container');
  const token = sessionStorage.getItem('token');

  getAccount(token, id)
    .then((data) => {
      const [transactions, account, balance] = [
        data.transactions,
        data.account,
        data.balance,
      ];

      const top = createTop(router, '/accounts', 'Просмотр счёта');
      const middle = createMiddle(account, balance);
      const mainBlock = el('div', { class: 'account-main' });

      const [transferForm, select, amount] = createNewTransferForm();

      const hystoryBlock = createHystoryOfTransfers(transactions, account, 10);

      const [balanceDynamicsBlock, canvas] =
        createBalanceDynamicsBlock('Динамика баланса');

      [balanceDynamicsBlock, hystoryBlock].forEach((block) => {
        block.addEventListener('click', () => {
          router.navigate(`/accounts/${id}/hystory`);
        });
      });

      setChildren(mainBlock, [
        transferForm,
        balanceDynamicsBlock,
        hystoryBlock,
      ]);
      setChildren(container, [top, middle, mainBlock]);

      const [months, balances] = getMonthsBalances(
        transactions,
        account,
        balance,
        6
      );

      createChart(canvas, months, balances);

      createChoices(select.id);

      const choicesInput = document.querySelector('.choices__input--cloned');
      const choicesInner = document.querySelector('.choices__inner');

      choicesInput.addEventListener('keypress', (e) => {
        if (select.value || /\D/.test(e.key)) e.preventDefault();
      });

      choicesInput.addEventListener('blur', () => {
        if (checkAccountSelect(choicesInput.value) || select.value)
          inputStatus(choicesInner, true);
        else {
          inputStatus(choicesInner);
          openMessage('Некорректный счёт получателя', 'error');
        }
      });

      transferForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (
          (checkAccountSelect(choicesInput.value) || select.value) &&
          checkAmount(amount.value)
        ) {
          const to = select.value ? select.value : choicesInput.value;

          if (to === account) {
            inputStatus(choicesInner);
            openMessage('Попытка отправить деньги на тот же счёт', 'error');
            return;
          }

          sendTransfer(id, to, amount.value.replace(',', '.'), token).then(
            (res) => {
              if (res.payload !== null) {
                const recipientsStr = localStorage.getItem('recipients');
                if (recipientsStr) {
                  const recipients = recipientsStr.split(' ');
                  recipients.push(to);

                  localStorage.setItem(
                    'recipients',
                    Array.from(new Set(recipients)).join(' ')
                  );
                } else {
                  localStorage.setItem('recipients', to);
                }

                const main = document.querySelector('main');
                setChildren(main, [createSpinner(), openAccount(router, id)]);

                openMessage('Перевод отправлен', 'success');
              } else {
                switch (res.error) {
                  case 'Invalid account to':
                    inputStatus(choicesInner);
                    openMessage('Счёт получателя не существует', 'error');
                    break;
                  case `Invalid amount`:
                    inputStatus(amount);
                    openMessage('Некорректная сумма', 'error');
                    break;
                  case `Overdraft prevented`:
                    inputStatus(amount);
                    openMessage(
                      'Сумма перевода, больше чем денег на счёте',
                      'error'
                    );
                    break;
                }
              }
            }
          );
        }
      });
    })
    .finally(() => hideSpinner());

  return container;
}
