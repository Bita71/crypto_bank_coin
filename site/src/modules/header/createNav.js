import { el, setChildren } from 'redom';
import createBtn from '../createBtn.js';

const btnsData = [
  { name: 'Банкоматы', href: '/banks' },
  { name: 'Счета', href: '/accounts' },
  { name: 'Валюта', href: '/exchange' },
  { name: 'Выйти', href: '/' },
];

const btns = [];

let navBlock;

export function activateBtnNav(active) {
  btns.forEach((btn) => {
    if (btn.textContent === active) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

export function showNav(show = false) {
  if (show) navBlock.classList.add('open');
  else navBlock.classList.remove('open');
}

export function createNav(router) {
  if (navBlock) return navBlock;

  const nav = el('nav', { class: 'nav' });

  const list = el('ul', { class: 'reset-list nav-list' });

  const itemsList = btnsData.map((item) => {
    const itemBlock = el('li', { class: 'nav-item' });
    const btn = createBtn(item.name, `btn btn-outline nav-btn`, {
      href: item.href,
      router: router,
    });
    setChildren(itemBlock, [btn]);
    btns.push(btn);
    return itemBlock;
  });

  setChildren(list, itemsList);

  setChildren(nav, [list]);

  navBlock = nav;
  return nav;
}
