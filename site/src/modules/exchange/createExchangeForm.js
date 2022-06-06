import { el, mount, setChildren } from 'redom';
import createBtn from '../createBtn';
import inputStatus from '../inputStatus';
import openMessage from '../message/openMessage';
import { checkAmount } from '../oneAccount/createNewTransferForm';
import { createMyCurrenciesList } from './createMyCurrencies';
import exchangeCurrencies from '../serverFunctions/exchangeCurrencies';

function createSelect(name, currencies) {
  const select = el('select', {
    class: 'select exchange-select',
    name: name,
    id: name,
  });

  const optionList = currencies.map((item) =>
    el('option', item, {
      class: 'option exchange-option',
      value: item,
    })
  );

  setChildren(select, optionList);

  return select;
}

export default function createExchangeForm(currenciesList) {
  const form = el('form', { class: 'exchange-form' });
  const title = el('h2', 'Обмен валюты', {
    class: 'reset-title exchange-main-title exchange-form-title',
  });

  const currencies = el('div', { class: 'exchange-form-currencies' });
  const spanFrom = el('span', 'Из', {
    class: 'form-span exchange-form-currencies-span from',
  });
  const spanTo = el('span', 'в', {
    class: 'form-span exchange-form-currencies-span to',
  });

  const [selectFrom, selectTo] = ['from', 'to'].map((name) =>
    createSelect(name, currenciesList)
  );

  setChildren(currencies, [spanFrom, selectFrom, spanTo, selectTo]);

  const amountBlock = el('div', { class: 'exchange-form-amount' });
  const amountSpan = el('span', 'Сумма', {
    class: 'form-span exchange-form-amount-span',
  });
  const amount = el('input', {
    class: 'reset-input form-input exchange-form-amount-input',
    name: 'amount',
    type: 'number',
  });

  amount.addEventListener('keypress', (e) => {
    if (/\D/.test(e.key) && e.key !== '.' && e.key !== ',') e.preventDefault();
  });

  amount.addEventListener('blur', () => {
    if (checkAmount(amount.value)) inputStatus(amount, true);
    else {
      inputStatus(amount);
      openMessage('Некорректная сумма', 'error');
    }
  });

  setChildren(amountBlock, [amountSpan, amount]);

  const btnExchange = createBtn(
    'Обменять',
    'btn btn-primary exchange-form-btn',
    { type: 'submit' }
  );

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amountValue = amount.value;

    if (checkAmount(amountValue)) {
      exchangeCurrencies(
        selectFrom.value,
        selectTo.value,
        amountValue,
        sessionStorage.getItem('token')
      ).then((res) => {
        if (res.payload !== null) {
          const myCurrencies = document.querySelector('.exchange-currencies');
          document.querySelector('.exchange-currencies-list').remove();
          const newMyCurrenciesList = createMyCurrenciesList(res.payload);
          mount(myCurrencies, newMyCurrenciesList);

          amount.value = '';
          amount.classList.remove('success');
          amount.classList.remove('error');

          openMessage('Обмен валют выполнен', 'success');
        } else {
          switch (res.error) {
            case 'Overdraft prevented':
              openMessage(
                'Попытка перевести больше, чем доступно на счёте списания',
                'error'
              );
              inputStatus(amount);
              break;
            case 'Not enough currency':
              openMessage('На валютном счёте списания нет средств', 'error');
              inputStatus(amount);
              break;
          }
        }
      });
    } else {
      inputStatus(amount);
      openMessage('Некорректная сумма', 'error');
    }
  });

  setChildren(form, [title, currencies, amountBlock, btnExchange]);

  return [form, [selectFrom, selectTo]];
}
