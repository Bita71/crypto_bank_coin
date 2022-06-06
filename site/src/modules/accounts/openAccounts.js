import { el, setChildren } from 'redom';
import createChoices from '../createChoices';
import getAccountsList from '../serverFunctions/getAccountsList';
import createAccountsList from './createAccountsList';
import createContainer from '../createContainer';
import createAccountsTop from './createAccountsTop';
import sortList from './sortList';
import { hideSpinner } from '../spinner/spinner';

export default function openAccounts(router, sort = 'byBalance') {
  const container = createContainer('accounts-container');

  const [title, select, btnNewAccount] = createAccountsTop(router, sort);
  const top = el('div', { class: 'accounts-top' });

  setChildren(top, [title, select, btnNewAccount]);

  getAccountsList(sessionStorage.getItem('token'))
    .then((list) => {
      sortList(list, sort);
      setChildren(container, [top, createAccountsList(list, router)]);
    })
    .then(() => {
      createChoices(select.id);
      const choicesSingle = document.querySelector('.choices__list--single');
      choicesSingle.children[0].textContent = 'Сортировка';

      select.addEventListener('change', () => {
        choicesSingle.children[0].textContent = 'Сортировка';
        router.navigate(`/accounts?sort=${select.value}`);
      });
    })
    .finally(() => hideSpinner());

  return container;
}
