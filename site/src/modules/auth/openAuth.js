import { el, setChildren } from 'redom';
import createBtn from '../createBtn';
import auth from '../serverFunctions/auth';
import inputStatus from '../inputStatus';
import createContainer from '../createContainer';
import openMessage from '../message/openMessage';

function validate(value) {
  return value.length >= 6 && !/\s/.test(value);
}

function createSpan(text) {
  return el('span', text, { class: 'form-span auth-span' });
}

export default function openAuth(router) {
  const container = createContainer('auth-container');
  const form = el('form', { class: 'form auth-form' });
  const title = el('h1', 'Вход в аккаунт', {
    class: 'reset-title title auth-title',
  });

  const login = el('input', {
    id: 'login',
    class: 'reset-input form-input auth-input',
    type: 'text',
    name: 'login',
  });
  login.addEventListener('blur', () => {
    const isValid = validate(login.value);
    inputStatus(login, isValid);
    if (!isValid)
      openMessage('Логин должен содержать как минимум 6 символом', 'error');
  });

  const password = el('input', {
    id: 'password',
    class: 'reset-input form-input auth-input',
    type: 'password',
    name: 'password',
  });
  password.addEventListener('blur', () => {
    const isValid = validate(password.value);
    inputStatus(password, isValid);
    if (!isValid)
      openMessage('Пароль должен содержать как минимум 6 символом', 'error');
  });

  const btn = createBtn('Войти', 'btn btn-primary auth-btn', {
    type: 'submit',
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginValue = login.value.trim();
    const passwordValue = password.value.trim();

    if (validate(loginValue) && validate(passwordValue)) {
      auth(loginValue, passwordValue).then((res) => {
        if (res.payload === null) {
          if (res.error == 'No such user') {
            inputStatus(login);
            openMessage('Пользователя с таким логином не существует', 'error');
          }
          if (res.error == 'Invalid password') {
            inputStatus(password);
            openMessage('Неверный пароль', 'error');
          }
        } else {
          router.navigate('/accounts');
        }
      });
    }
  });

  setChildren(form, [
    title,
    createSpan('Логин'),
    login,
    createSpan('Пароль'),
    password,
    btn,
  ]);
  setChildren(container, [form]);
  return container;
}
