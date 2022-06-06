import { el, setChildren } from 'redom';

export default function createBalanceDynamicsBlock(text) {
  const canvas = el('canvas', { id: 'chart' });
  const block = el('div', { class: 'account-balance' });
  const title = el('h2', text, {
    class: 'reset-title account-main-title account-balance-title',
  });

  setChildren(block, [title, canvas]);

  return [block, canvas];
}
