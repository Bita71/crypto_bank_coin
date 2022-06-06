import { el, mount } from 'redom';

export default function createMessageList() {
  const list = el('ul', { class: 'reset-list message-list' });
  mount(document.body, list);
  return list;
}
