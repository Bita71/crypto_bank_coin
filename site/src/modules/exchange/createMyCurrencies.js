import { el, setChildren, mount } from 'redom';
import createPriceFormat from '../createPriceFormat';

export function createMyCurrenciesList(myCurrencies) {
  const list = el('ul', { class: 'reset-list exchange-currencies-list' });

  for (const key in myCurrencies) {
    const element = myCurrencies[key];
    if (element.amount) {
      const item = el('li', {
        class: 'exchange-currencies-item',
      });

      const code = el('p', element.code, {
        class: 'reset-text exchange-code',
      });

      const amount = el('p', createPriceFormat(element.amount), {
        class: 'reset-text exchange-amount',
      });
      setChildren(item, [code, amount]);
      mount(list, item);
    }
  }

  return list;
}

export default function createMyCurrencies(myCurrencies) {
  const block = el('div', { class: 'exchange-currencies' });
  const title = el('h2', 'Ваши валюты', {
    class: 'reset-title exchange-main-title',
  });
  const list = createMyCurrenciesList(myCurrencies);

  setChildren(block, [title, list]);

  return block;
}
