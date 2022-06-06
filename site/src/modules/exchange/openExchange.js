import { el, setChildren } from 'redom';
import createContainer from '../createContainer';
import createMyCurrencies from './createMyCurrencies';
import createExchangeForm from './createExchangeForm';
import getMyCurrencies from '../serverFunctions/getMyCurrencies';
import getAllCurrencies from '../serverFunctions/getAllCurrencies';
import createChoices from '../createChoices';
import createExchangeRate from './createExchangeRate';
import { hideSpinner } from '../spinner/spinner';

export default function openExchange() {
  const token = sessionStorage.getItem('token');

  const container = createContainer('exchange-container');
  const title = el('h1', 'Валютный обмен', {
    class: 'reset-title title exchange-title',
  });
  const exchangeMain = el('div', { class: 'exchange-main' });

  const exchangeRate = createExchangeRate();

  Promise.all([getMyCurrencies(token), getAllCurrencies(token)])
    .then(([myCurrencies, allCurrencies]) => {
      const myCurrenciesBlock = createMyCurrencies(myCurrencies);
      const [exchangeForm, selectList] = createExchangeForm(allCurrencies);
      setChildren(exchangeMain, [
        myCurrenciesBlock,
        exchangeForm,
        exchangeRate,
      ]);
      return selectList;
    })
    .then((selectList) => {
      selectList.map((select) => createChoices(select.id, { sort: true }));
    })
    .finally(() => hideSpinner());

  setChildren(container, [title, exchangeMain]);

  return container;
}
