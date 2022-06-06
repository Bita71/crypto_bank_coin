import 'normalize.css';
import './styles/style.scss';
import '@babel/polyfill';
import { el, setChildren } from 'redom';
import createHeader from './modules/header/createHeader';
import openAccounts from './modules/accounts/openAccounts';
import Navigo from 'navigo';
import openAuth from './modules/auth/openAuth';
import openAccount from './modules/oneAccount/openAccount';
import openHystory from './modules/accountHystory/openHystory';
import openExchange from './modules/exchange/openExchange';
import openWebSocket from './modules/serverFunctions/openWebSocket';
import openBanks from './modules/banks/openBanks';
import { createSpinner } from './modules/spinner/spinner';

const body = document.body;
const main = el('main', { class: 'main' });
const router = new Navigo('/');
openWebSocket();

router
  .on('/', () => {
    if (sessionStorage.getItem('token'))
      router.navigate('/accounts?sort=byBalance');
    setChildren(main, [openAuth(router)]);
    setChildren(body, [createHeader(router), main]);
  })
  .on('/accounts', (query) => {
    if (!sessionStorage.getItem('token')) router.navigate('/');
    const sort = query.params !== null ? query.params.sort : 'byBalance';
    setChildren(main, [createSpinner(), openAccounts(router, sort)]);
    setChildren(body, [createHeader(router, true, 'Счета'), main]);
  })
  .on('/accounts/:id', (params) => {
    if (!sessionStorage.getItem('token')) router.navigate('/');
    setChildren(main, [createSpinner(), openAccount(router, params.data.id)]);
    setChildren(body, [createHeader(router, true), main]);
  })
  .on('/accounts/:id/hystory', (params) => {
    if (!sessionStorage.getItem('token')) router.navigate('/');
    setChildren(main, [createSpinner(), openHystory(router, params.data.id)]);
    setChildren(body, [createHeader(router, true), main]);
  })
  .on('/exchange', () => {
    if (!sessionStorage.getItem('token')) router.navigate('/');
    setChildren(main, [createSpinner(), openExchange()]);
    setChildren(body, [createHeader(router, true, 'Валюта'), main]);
  })
  .on('/banks', () => {
    if (!sessionStorage.getItem('token')) router.navigate('/');
    setChildren(main, [createSpinner(), openBanks()]);
    setChildren(body, [createHeader(router, true, 'Банкоматы'), main]);
  })
  .notFound(function () {
    router.navigate('/');
  })
  .resolve();
