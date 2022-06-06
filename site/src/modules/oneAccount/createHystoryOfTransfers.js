import { el, mount, setChildren } from 'redom';
import createBtn from '../createBtn';
import createPriceFormat from '../createPriceFormat';

function createTh(text) {
  return el('th', text);
}

function formatDate(dateStr) {
  return new Date(dateStr)
    .toLocaleDateString('en-GB', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '.');
}

function createRow(transfer, account) {
  const incoming = transfer.to === account;

  const row = el('tr', { class: 'account-hystory-table-row' });

  const from = el('td', transfer.from, {
    class: 'account-hystory-table-from',
  });
  const to = el('td', transfer.to, { class: 'account-hystory-table-to' });
  const amount = el(
    'td',
    (incoming ? '+' : '-') + ` ${createPriceFormat(transfer.amount)} ₽`,
    {
      class: 'account-hystory-table-amount ' + (incoming ? 'green' : 'red'),
    }
  );

  const date = el('td', formatDate(transfer.date), {
    class: 'account-hystory-table-number',
  });

  setChildren(row, [from, to, amount, date]);

  return row;
}

function openPaginationItems(itemList, start, end) {
  itemList.forEach((item) => {
    const btnText = item.children[0].textContent;
    if (btnText >= start && btnText <= end) item.classList.add('open');
    else item.classList.remove('open');
  });
}

function createPaginationArrows(itemList) {
  let start = 1;
  let end = 6;

  const ellipsisLeft = el('span', '...', {
    class: 'hystory-pagination-ellipsis left',
  });

  const ellipsisRight = el('span', '...', {
    class: 'hystory-pagination-ellipsis right open',
  });

  const icon = `<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 0.75L1 5L5.5 9.25" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  const arrowLeft = createBtn(
    '',
    'btn btn-primary hystory-pagination-arrow left',
    {
      icon: icon,
    }
  );

  const arrowRight = createBtn(
    '',
    'btn btn-primary hystory-pagination-arrow right',
    {
      icon: icon,
    }
  );

  arrowLeft.disabled = 'disabled';

  arrowLeft.addEventListener('click', () => {
    arrowLeft.disabled = '';
    arrowRight.disabled = '';
    ellipsisLeft.classList.add('open');
    ellipsisRight.classList.add('open');

    if (start !== 1) {
      start -= 6;
      end -= 6;
      openPaginationItems(itemList, start, end);
    }

    if (start === 1) {
      arrowLeft.disabled = 'disabled';
      ellipsisLeft.classList.remove('open');
    }
  });

  arrowRight.addEventListener('click', () => {
    arrowLeft.disabled = '';
    arrowRight.disabled = '';
    ellipsisLeft.classList.add('open');
    ellipsisRight.classList.add('open');

    if (end < itemList.length) {
      start += 6;
      end += 6;
      openPaginationItems(itemList, start, end);
    }
    if (end >= itemList.length) {
      arrowRight.disabled = 'disabled';
      ellipsisRight.classList.remove('open');
    }
  });

  openPaginationItems(itemList, start, end);

  return [arrowLeft, arrowRight, ellipsisLeft, ellipsisRight];
}

function createPagination(count, list, account) {
  const paginationBlock = el('div', { class: 'hystory-pagination' });
  const paginationList = el('ul', {
    class: 'reset-list hystory-pagination-list',
  });
  const itemList = [];

  for (let i = 1; i <= count; i++) {
    const item = el('li', { class: 'hystory-pagination-item' });
    const btn = createBtn(i, 'btn btn-primary hystory-pagination-btn');

    if (i === 1) btn.classList.add('active');
    btn.addEventListener('click', () =>
      openPage(btn.textContent, list, account)
    );

    itemList.push(item);
    setChildren(item, [btn]);
  }

  setChildren(paginationList, itemList);

  const [arrowLeft, arrowRight, ellipsisLeft, ellipsisRight] =
    createPaginationArrows(itemList);

  if (count > 6)
    setChildren(paginationBlock, [
      arrowLeft,
      ellipsisLeft,
      paginationList,
      ellipsisRight,
      arrowRight,
    ]);
  else setChildren(paginationBlock, [paginationList]);

  return paginationBlock;
}

function activateBtn(btnText) {
  const btnsList = document.querySelectorAll('.hystory-pagination-btn');
  btnsList.forEach((btn) => {
    if (btn.textContent == btnText) {
      btn.classList.add('active');
    } else btn.classList.remove('active');
  });
}

function openPage(page, list, account) {
  const tableBody = document.querySelector('tbody');
  const rowList = list
    .slice(-25 * page, list.length - 25 * (page - 1))
    .map((transfer) => createRow(transfer, account));
  setChildren(tableBody, rowList);
  activateBtn(page);
}

export default function createHystoryOfTransfers(
  transfers,
  account,
  count,
  pagination = false
) {
  const block = el('div', { class: 'account-hystory' });
  const title = el('h2', 'История переводов', {
    class: 'reset-title account-main-title account-hystory-title',
  });
  const table = el('table', { class: 'account-hystory-table' });
  const tableHeader = el('thead');
  const tableHeaderRow = el('tr', { class: 'account-hystory-table-header' });
  const tableThList = [
    'Счёт отправителя',
    'Счёт получателя',
    'Сумма',
    'Дата',
  ].map((text) => createTh(text));

  setChildren(tableHeader, [tableHeaderRow]);
  setChildren(tableHeaderRow, tableThList);

  const tableBody = el('tbody');

  const tableBodyList = transfers
    .slice(-count)
    .map((transfer) => createRow(transfer, account));

  setChildren(tableBody, tableBodyList);

  setChildren(table, [tableHeader, tableBody]);

  setChildren(block, [title, table]);

  if (pagination && transfers.length > 25) {
    const paginationBlock = createPagination(
      Math.ceil(transfers.length / count),
      transfers,
      account
    );
    mount(block, paginationBlock);
  }

  return block;
}
