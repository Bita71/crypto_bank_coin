import { el, mount, setChildren } from 'redom';
import createPriceFormat from '../createPriceFormat';

const list = el('ul', { class: 'reset-list exchange-rates-list' });

const pairs = {};

export function addItemTOExchangeList(data) {
  if (data.change == 0 && pairs[data.from + data.to] !== undefined) {
    mount(list, pairs[data.from + data.to]);
    return;
  }

  const direction = data.change == -1;

  const item = el('li', {
    class: `exchange-rates-item ${direction ? 'down' : 'up'}`,
  });

  const codeAmountBlock = el('div', { class: 'exchange-rates-code-amount' });
  const title = el('p', `${data.from}/${data.to}`, {
    class: 'reset-text exchange-code',
  });
  const rate = el('p', createPriceFormat(data.rate), {
    class: `reset-text exchange-amount`,
  });

  const directionSpan = el('span');

  setChildren(codeAmountBlock, title, rate);
  setChildren(item, [codeAmountBlock, directionSpan]);
  mount(list, item);

  pairs[data.from + data.to] = item;
}

export default function createExchangeRate() {
  const block = el('div', { class: 'exchange-rates' });
  const title = el('h2', 'Изменение курсов в реальном времени', {
    class: 'reset-title exchange-main-title',
  });
  setChildren(block, [title, list]);

  return block;
}
