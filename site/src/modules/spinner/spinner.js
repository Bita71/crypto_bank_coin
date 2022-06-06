import { el, setChildren } from 'redom';

let spinnerBlock;

export function createSpinner() {
  if (!spinnerBlock) {
    spinnerBlock = el('div', { class: 'spinner' });
    let spinner = el('div', { class: 'spinner-ring' });
    setChildren(spinnerBlock, [spinner]);
  }
  showSpinner();
  return spinnerBlock;
}

export function showSpinner() {
  spinnerBlock.classList.add('show');
}

export function hideSpinner() {
  spinnerBlock.classList.remove('show');
}
