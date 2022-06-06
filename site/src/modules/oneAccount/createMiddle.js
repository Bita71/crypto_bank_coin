import { el, setChildren } from 'redom';
import createPriceFormat from '../createPriceFormat';

export default function createMiddle(account, balance) {
  const block = el('div', { class: 'account-middle' });

  const number = el('p', `№ ${account}`, {
    class: 'reset-text account-middle-number',
  });

  const right = el('div', { class: 'account-middle-right' });
  const rightTitle = el('p', 'Баланс', {
    class: 'reset-text account-middle-right-title',
  });
  const balanceBlock = el('p', `${createPriceFormat(balance)} ₽`, {
    class: ' reset-text account-middle-right-balance',
  });

  setChildren(right, [rightTitle, balanceBlock]);
  setChildren(block, [number, right]);

  return block;
}
