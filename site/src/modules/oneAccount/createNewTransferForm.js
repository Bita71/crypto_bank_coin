import { el, setChildren } from 'redom';
import createBtn from '../createBtn';
import inputStatus from '../inputStatus';
import openMessage from '../message/openMessage';

function createSpan(text) {
  return el('span', text, {
    class: 'form-span account-transfer-span',
  });
}

export function checkAmount(str) {
  return /^\d+[.,]?\d*$/.test(str);
}

export function createNewTransferForm() {
  const recipients = localStorage.getItem('recipients')
    ? localStorage.getItem('recipients').split(' ')
    : [];

  const form = el('form', { class: 'form account-transfer' });

  const title = el('h2', 'Новый перевод', {
    class: 'reset-title account-main-title account-transfer-title',
  });

  const select = el('select', {
    class: 'select account-transfer-select',
    name: 'recipient',
    id: 'recipient',
    multiple: 'multiple',
  });

  const optionsList = recipients.map((account) =>
    el('option', account, {
      class: 'option account-transfer-option',
      value: account,
    })
  );

  select.addEventListener('change', () => {
    if (select.value) amountInput.focus();
  });

  setChildren(select, optionsList);

  const amountInput = el('input', {
    class: 'reset-input form-input account-transfer-amount',
    id: 'amount',
    type: 'text',
    name: 'amount',
  });

  amountInput.addEventListener('keypress', (e) => {
    if (/\D/.test(e.key) && e.key !== '.' && e.key !== ',') e.preventDefault();
  });

  amountInput.addEventListener('blur', () => {
    if (checkAmount(amountInput.value)) inputStatus(amountInput, true);
    else {
      inputStatus(amountInput);
      openMessage('Некорректная сумма', 'error');
    }
  });

  const btnSend = createBtn(
    'Отправить',
    'btn btn-primary account-transfer-btn',
    {
      icon: `<svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z" fill="white"/>
    </svg>
    `,
      type: 'submit',
    }
  );

  setChildren(form, [
    title,
    createSpan('Номер счёта получателя'),
    select,
    createSpan('Сумма перевода'),
    amountInput,
    btnSend,
  ]);

  return [form, select, amountInput];
}
