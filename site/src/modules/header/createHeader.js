import { el, setChildren } from 'redom';
import { createNav, activateBtnNav, showNav } from './createNav.js';
import createContainer from '../createContainer.js';

let headerBlock;

export default function createHeader(router, enter = false, active = '') {
  if (!headerBlock) {
    const header = el('header', { class: 'header' });
    const container = createContainer('header-container');
    const logo = el('div', 'Coin.', { class: 'header-logo' });
    const nav = createNav(router);

    setChildren(container, [logo, nav]);
    setChildren(header, [container]);

    headerBlock = header;
  }

  showNav(enter);
  activateBtnNav(active);
  return headerBlock;
}
