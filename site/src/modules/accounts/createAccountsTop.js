import createBtn from '../createBtn';
import createNewAccount from '../serverFunctions/createNewAccount';
import { el, setChildren, mount } from 'redom';
import getAccountsList from '../serverFunctions/getAccountsList';
import sortList from './sortList';
import createAccountsList from './createAccountsList';
import { hideSpinner, showSpinner } from '../spinner/spinner';
import openMessage from '../message/openMessage';

export default function createAccountsTop(router, sort) {
  const title = el('h1', 'Ваши счета', {
    class: 'reset-title title accounts-title',
  });

  const select = el('select', {
    class: 'select accounts-select',
    name: 'sort',
    id: 'sort',
  });

  const optionList = [
    { text: 'По номеру', name: 'byNumber' },
    { text: 'По балансу', name: 'byBalance' },
    { text: 'По последней транзакции', name: 'byLastTransaction' },
  ].map((option) =>
    el('option', option.text, {
      class: 'option accounts-option',
      value: option.name,
      selected: sort == option.name ? 'selected' : '',
    })
  );

  setChildren(select, optionList);

  const btnNewAccount = createBtn(
    'Создать новый счёт',
    'btn btn-primary accounts-btn-new',
    {
      icon: '<svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" stroke-width="2"/></svg>',
    }
  );

  btnNewAccount.addEventListener('click', () => {
    showSpinner();
    createNewAccount()
      .then(() => {
        const container = document.querySelector('.accounts-container');
        document.querySelector('.accounts-list').remove();

        getAccountsList(sessionStorage.getItem('token')).then((list) => {
          sortList(list, sort);
          mount(container, createAccountsList(list, router));
        });
      })
      .finally(() => {
        hideSpinner();
        openMessage('Счёт создан', 'success');
      });
  });

  return [title, select, btnNewAccount];
}
