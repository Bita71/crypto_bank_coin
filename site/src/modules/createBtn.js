import { el } from 'redom';

export default function createBtn(
  text,
  btnClass = '',
  extra = {
    icon: null,
    href: '',
    router: null,
    type: '',
  }
) {
  const btn = el('button', text, {
    class: `reset-btn ${btnClass}`,
    type: extra.type ?? 'button',
  });

  if (extra.href && extra.router && !/\sactive\s/.test(btnClass)) {
    btn.addEventListener('click', () => {
      if (btn.textContent == 'Выйти') sessionStorage.removeItem('token');
      extra.router.navigate(extra.href);
    });
  }

  if (extra.icon) btn.innerHTML = `${extra.icon}${text}`;

  return btn;
}
