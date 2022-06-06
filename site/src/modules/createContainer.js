import { el } from 'redom';

export default function createContainer(classContainer = '') {
  return el('div', { class: `container ${classContainer}` });
}
