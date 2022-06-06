import { el, setChildren } from 'redom';
import getAccount from '../serverFunctions/getAccount';
import createContainer from '../createContainer';
import createTop from '../oneAccount/createTop';
import createMiddle from '../oneAccount/createMiddle';
import createHystoryOfTransfers from '../oneAccount/createHystoryOfTransfers';
import createChart from '../createChart';
import createBalanceDynamicsBlock from '../oneAccount/createBalanceDynamics';
import getMonthsBalances from '../getMonthsBalances';
import { hideSpinner } from '../spinner/spinner';

export default function openHystory(router, id) {
  const container = createContainer('hystory-container');

  getAccount(sessionStorage.getItem('token'), id)
    .then((data) => {
      const transactions = data.transactions;
      const account = data.account;
      const balance = data.balance;

      const top = createTop(router, '/accounts/' + id, 'История баланса');
      const middle = createMiddle(account, balance);

      const [balanceDynamicsBlock, canvas] =
        createBalanceDynamicsBlock('Динамика баланса');

      const [balanceDynamicsBlock2, canvas2] = createBalanceDynamicsBlock(
        'Соотношение входящих исходящих транзакций'
      );

      const [months, balances, incomingTransfers, outingTransfers] =
        getMonthsBalances(transactions, account, balance, 12);

      const hystoryOfTransfers = createHystoryOfTransfers(
        transactions,
        account,
        25,
        true
      );

      const hystoryMainBlock = el('div', { class: 'hystory-main' });

      setChildren(hystoryMainBlock, [
        balanceDynamicsBlock,
        balanceDynamicsBlock2,
        hystoryOfTransfers,
      ]);

      setChildren(container, [top, middle, hystoryMainBlock]);

      createChart(canvas, months, balances);

      createChart(canvas2, months, balances, true, {
        incoming: incomingTransfers,
        outing: outingTransfers,
      });
    })
    .finally(() => hideSpinner());
  return container;
}
