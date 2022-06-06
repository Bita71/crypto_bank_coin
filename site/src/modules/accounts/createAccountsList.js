import { el, setChildren } from 'redom';
import createBtn from '../createBtn';
import createPriceFormat from '../createPriceFormat';

function createItem(item, router) {
  const itemBlock = el('li', { class: 'accounts-item' });

  const title = el('h1', item.account, {
    class: 'reset-title accounts-item-title',
  });
  const text = el('p', createPriceFormat(item.balance) + ' ₽', {
    class: 'reset-text accounts-item-text',
  });

  const info = el('div', { class: 'accounts-item-info' });

  const infoLeft = el('div', { class: 'accounts-item-info-left' });

  const lastTransaction = el('p', 'Последняя транзакция:', {
    class: 'reset-text accounts-item-info-title',
  });

  const date = item.transactions[0] ? item.transactions[0].date : null;
  const datetime = el(
    'time',
    date
      ? new Date(date)
          .toLocaleDateString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
          .replace('г.', '')
      : 'Транзакций не совершалось',
    {
      class: 'accounts-item-info-date',
      datetime: date,
    }
  );

  const btnOpen = createBtn('Открыть', 'btn btn-primary accounts-item-btn', {
    href: `/accounts/${item.account}`,
    type: 'button',
    router: router,
  });

  setChildren(infoLeft, [lastTransaction, datetime]);
  setChildren(info, [infoLeft, btnOpen]);
  setChildren(itemBlock, [title, text, info]);

  return itemBlock;
}

export default function createAccountsList(accountsList, router) {
  const list = el('ul', { class: 'reset-list accounts-list' });
  setChildren(
    list,
    accountsList.map((item) => createItem(item, router))
  );
  return list;
}
