import { el, setChildren, mount } from 'redom';
import createMessageList from './createMessageList';

export default function openMessage(text, type) {
  const list = document.querySelector('.message-list') ?? createMessageList();
  const item = el('li', { class: 'message-item ' + type });
  const textBlock = el('p', text, { class: 'reset-text message-text' });
  const btnClose = el('button', { class: 'reset-btn message-btn' });

  btnClose.addEventListener('click', () => item.remove());

  setChildren(item, [textBlock, btnClose]);
  mount(list, item);

  setTimeout(() => item.remove(), 3000);
}
