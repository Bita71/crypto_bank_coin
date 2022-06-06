import createBtn from '../createBtn';
import { el, setChildren } from 'redom';

let block;

export default function createTop(router, href, text) {
  if (!block) {
    block = el('div', { class: 'account-top' });

    const title = el('h1', text, {
      class: 'reset-title title account-title',
    });

    const btnBack = createBtn(
      'Вернуться назад',
      'btn btn-primary account-btn-back',
      {
        icon: `<svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="white"/>
    </svg>
    `,
      }
    );

    btnBack.addEventListener('click', () => router.navigate(href));

    setChildren(block, [title, btnBack]);
  }
  return block;
}
