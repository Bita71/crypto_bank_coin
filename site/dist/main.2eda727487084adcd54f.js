"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[179],{9074:(t,e,n)=>{n(6981);var r=n(5877);function a(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{icon:null,href:"",router:null,type:""},o=(0,r.el)("button",t,{class:"reset-btn ".concat(n),type:null!==(e=a.type)&&void 0!==e?e:"button"});return a.href&&a.router&&!/\sactive\s/.test(n)&&o.addEventListener("click",(function(){"Выйти"==o.textContent&&sessionStorage.removeItem("token"),a.router.navigate(a.href)})),a.icon&&(o.innerHTML="".concat(a.icon).concat(t)),o}var o,i,c=[{name:"Банкоматы",href:"/banks"},{name:"Счета",href:"/accounts"},{name:"Валюта",href:"/exchange"},{name:"Выйти",href:"/"}],s=[];function l(t){s.forEach((function(e){e.textContent===t?e.classList.add("active"):e.classList.remove("active")}))}function u(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t?o.classList.add("open"):o.classList.remove("open")}function f(t){if(o)return o;var e=(0,r.el)("nav",{class:"nav"}),n=(0,r.el)("ul",{class:"reset-list nav-list"}),i=c.map((function(e){var n=(0,r.el)("li",{class:"nav-item"}),o=a(e.name,"btn btn-outline nav-btn",{href:e.href,router:t});return(0,r.IX)(n,[o]),s.push(o),n}));return(0,r.IX)(n,i),(0,r.IX)(e,[n]),o=e,e}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,r.el)("div",{class:"container ".concat(t)})}function h(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!i){var a=(0,r.el)("header",{class:"header"}),o=d("header-container"),c=(0,r.el)("div","Coin.",{class:"header-logo"}),s=f(t);(0,r.IX)(o,[c,s]),(0,r.IX)(a,[o]),i=a}return u(e),l(n),i}var m,v=n(4529),p=n.n(v);function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{sort:!1};return new(p())("#".concat(t),{searchEnabled:!1,maxItemCount:1,maxItemText:"Счёт выбран",noResultsText:"Предложения отсутствуют",shouldSort:e.sort,itemSelectText:"",noChoicesText:"Предложения отсутствуют"})}function g(t,e,n,r,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,a)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){g(o,r,a,i,c,"next",t)}function c(t){g(o,r,a,i,c,"throw",t)}i(void 0)}))}}function I(t){return w.apply(this,arguments)}function w(){return(w=b(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/accounts",{method:"GET",headers:{Authorization:"Basic ".concat(e),"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(t.t0=t.sent.payload,t.t0){t.next=8;break}t.t0=[];case 8:return t.abrupt("return",t.t0);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return new Intl.NumberFormat("ru-RU").format(t)}function k(t,e){var n=(0,r.el)("ul",{class:"reset-list accounts-list"});return(0,r.IX)(n,t.map((function(t){return function(t,e){var n=(0,r.el)("li",{class:"accounts-item"}),o=(0,r.el)("h1",t.account,{class:"reset-title accounts-item-title"}),i=(0,r.el)("p",x(t.balance)+" ₽",{class:"reset-text accounts-item-text"}),c=(0,r.el)("div",{class:"accounts-item-info"}),s=(0,r.el)("div",{class:"accounts-item-info-left"}),l=(0,r.el)("p","Последняя транзакция:",{class:"reset-text accounts-item-info-title"}),u=t.transactions[0]?t.transactions[0].date:null,f=(0,r.el)("time",u?new Date(u).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"}).replace("г.",""):"Транзакций не совершалось",{class:"accounts-item-info-date",datetime:u}),d=a("Открыть","btn btn-primary accounts-item-btn",{href:"/accounts/".concat(t.account),type:"button",router:e});return(0,r.IX)(s,[l,f]),(0,r.IX)(c,[s,d]),(0,r.IX)(n,[o,i,c]),n}(t,e)}))),n}function S(t,e){t.sort((function(t,n){switch(e){case"byNumber":return t.account-n.account;case"byBalance":return t.balance-n.balance;case"byLastTransaction":return(t.transactions[0]?new Date(t.transactions[0].date):Date.now())-(n.transactions[0]?new Date(n.transactions[0].date):Date.now())}}))}function L(){if(!m){m=(0,r.el)("div",{class:"spinner"});var t=(0,r.el)("div",{class:"spinner-ring"});(0,r.IX)(m,[t])}return X(),m}function X(){m.classList.add("show")}function A(){m.classList.remove("show")}function E(t,e){var n,a=null!==(n=document.querySelector(".message-list"))&&void 0!==n?n:function(){var t=(0,r.el)("ul",{class:"reset-list message-list"});return(0,r.LI)(document.body,t),t}(),o=(0,r.el)("li",{class:"message-item "+e}),i=(0,r.el)("p",t,{class:"reset-text message-text"}),c=(0,r.el)("button",{class:"reset-btn message-btn"});c.addEventListener("click",(function(){return o.remove()})),(0,r.IX)(o,[i,c]),(0,r.LI)(a,o),setTimeout((function(){return o.remove()}),3e3)}function C(t,e){var n=(0,r.el)("h1","Ваши счета",{class:"reset-title title accounts-title"}),o=(0,r.el)("select",{class:"select accounts-select",name:"sort",id:"sort"}),i=[{text:"По номеру",name:"byNumber"},{text:"По балансу",name:"byBalance"},{text:"По последней транзакции",name:"byLastTransaction"}].map((function(t){return(0,r.el)("option",t.text,{class:"option accounts-option",value:t.name,selected:e==t.name?"selected":""})}));(0,r.IX)(o,i);var c=a("Создать новый счёт","btn btn-primary accounts-btn-new",{icon:'<svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.00001L12 12M12 12L12 20M12 12L20 12M12 12L4 12" stroke="white" stroke-width="2"/></svg>'});return c.addEventListener("click",(function(){X(),fetch("http://localhost:3000/create-account",{method:"POST",headers:{Authorization:"Basic ".concat(sessionStorage.getItem("token")),"Content-Type":"application/json"}}).then((function(){var n=document.querySelector(".accounts-container");document.querySelector(".accounts-list").remove(),I(sessionStorage.getItem("token")).then((function(a){S(a,e),(0,r.LI)(n,k(a,t))}))})).finally((function(){A(),E("Счёт создан","success")}))})),[n,o,c]}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){c=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"byBalance",n=d("accounts-container"),a=C(t,e),o=j(a,3),i=o[0],c=o[1],s=o[2],l=(0,r.el)("div",{class:"accounts-top"});return(0,r.IX)(l,[i,c,s]),I(sessionStorage.getItem("token")).then((function(a){S(a,e),(0,r.IX)(n,[l,k(a,t)])})).then((function(){y(c.id);var e=document.querySelector(".choices__list--single");e.children[0].textContent="Сортировка",c.addEventListener("change",(function(){e.children[0].textContent="Сортировка",t.navigate("/accounts?sort=".concat(c.value))}))})).finally((function(){return A()})),n}var O,D=n(8123),B=n.n(D);function q(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e?(t.classList.remove("error"),t.classList.add("success")):(t.classList.add("error"),t.classList.remove("success"))}function z(t){return t.length>=6&&!/\s/.test(t)}function N(t){return(0,r.el)("span",t,{class:"form-span auth-span"})}function _(t){var e=d("auth-container"),n=(0,r.el)("form",{class:"form auth-form"}),o=(0,r.el)("h1","Вход в аккаунт",{class:"reset-title title auth-title"}),i=(0,r.el)("input",{id:"login",class:"reset-input form-input auth-input",type:"text",name:"login"});i.addEventListener("blur",(function(){var t=z(i.value);q(i,t),t||E("Логин должен содержать как минимум 6 символом","error")}));var c=(0,r.el)("input",{id:"password",class:"reset-input form-input auth-input",type:"password",name:"password"});c.addEventListener("blur",(function(){var t=z(c.value);q(c,t),t||E("Пароль должен содержать как минимум 6 символом","error")}));var s=a("Войти","btn btn-primary auth-btn",{type:"submit"});return n.addEventListener("submit",(function(e){e.preventDefault();var n=i.value.trim(),r=c.value.trim();z(n)&&z(r)&&function(t,e){return fetch("http://localhost:3000/login",{method:"POST",body:JSON.stringify({login:t,password:e}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return t.payload&&sessionStorage.setItem("token",t.payload.token),t}))}(n,r).then((function(e){null===e.payload?("No such user"==e.error&&(q(i),E("Пользователя с таким логином не существует","error")),"Invalid password"==e.error&&(q(c),E("Неверный пароль","error"))):t.navigate("/accounts")}))})),(0,r.IX)(n,[o,N("Логин"),i,N("Пароль"),c,s]),(0,r.IX)(e,[n]),e}function H(t,e){return fetch("http://localhost:3000/account/".concat(e),{method:"GET",headers:{Authorization:"Basic ".concat(t),"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return t.payload}))}function U(t,e,n){if(!O){O=(0,r.el)("div",{class:"account-top"});var o=(0,r.el)("h1",n,{class:"reset-title title account-title"}),i=a("Вернуться назад","btn btn-primary account-btn-back",{icon:'<svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7.83 11L11.41 7.41L10 6L4 12L10 18L11.41 16.59L7.83 13H20V11H7.83Z" fill="white"/>\n    </svg>\n    '});i.addEventListener("click",(function(){return t.navigate(e)})),(0,r.IX)(O,[o,i])}return O}function $(t,e){var n=(0,r.el)("div",{class:"account-middle"}),a=(0,r.el)("p","№ ".concat(t),{class:"reset-text account-middle-number"}),o=(0,r.el)("div",{class:"account-middle-right"}),i=(0,r.el)("p","Баланс",{class:"reset-text account-middle-right-title"}),c=(0,r.el)("p","".concat(x(e)," ₽"),{class:" reset-text account-middle-right-balance"});return(0,r.IX)(o,[i,c]),(0,r.IX)(n,[a,o]),n}function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function P(t){return(0,r.el)("th",t)}function R(t,e){var n,a=t.to===e,o=(0,r.el)("tr",{class:"account-hystory-table-row"}),i=(0,r.el)("td",t.from,{class:"account-hystory-table-from"}),c=(0,r.el)("td",t.to,{class:"account-hystory-table-to"}),s=(0,r.el)("td",(a?"+":"-")+" ".concat(x(t.amount)," ₽"),{class:"account-hystory-table-amount "+(a?"green":"red")}),l=(0,r.el)("td",(n=t.date,new Date(n).toLocaleDateString("en-GB",{year:"2-digit",month:"2-digit",day:"2-digit"}).replace(/\//g,".")),{class:"account-hystory-table-number"});return(0,r.IX)(o,[i,c,s,l]),o}function V(t,e,n){t.forEach((function(t){var r=t.children[0].textContent;r>=e&&r<=n?t.classList.add("open"):t.classList.remove("open")}))}function Z(t,e,n){for(var o=(0,r.el)("div",{class:"hystory-pagination"}),i=(0,r.el)("ul",{class:"reset-list hystory-pagination-list"}),c=[],s=function(t){var o=(0,r.el)("li",{class:"hystory-pagination-item"}),i=a(t,"btn btn-primary hystory-pagination-btn");1===t&&i.classList.add("active"),i.addEventListener("click",(function(){return function(t,e,n){var a,o=document.querySelector("tbody"),i=e.slice(-25*t,e.length-25*(t-1)).map((function(t){return R(t,n)}));(0,r.IX)(o,i),a=t,document.querySelectorAll(".hystory-pagination-btn").forEach((function(t){t.textContent==a?t.classList.add("active"):t.classList.remove("active")}))}(i.textContent,e,n)})),c.push(o),(0,r.IX)(o,[i])},l=1;l<=t;l++)s(l);(0,r.IX)(i,c);var u=function(t){var e=1,n=6,o=(0,r.el)("span","...",{class:"hystory-pagination-ellipsis left"}),i=(0,r.el)("span","...",{class:"hystory-pagination-ellipsis right open"}),c='<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M5.5 0.75L1 5L5.5 9.25" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n  </svg>',s=a("","btn btn-primary hystory-pagination-arrow left",{icon:c}),l=a("","btn btn-primary hystory-pagination-arrow right",{icon:c});return s.disabled="disabled",s.addEventListener("click",(function(){s.disabled="",l.disabled="",o.classList.add("open"),i.classList.add("open"),1!==e&&V(t,e-=6,n-=6),1===e&&(s.disabled="disabled",o.classList.remove("open"))})),l.addEventListener("click",(function(){s.disabled="",l.disabled="",o.classList.add("open"),i.classList.add("open"),n<t.length&&V(t,e+=6,n+=6),n>=t.length&&(l.disabled="disabled",i.classList.remove("open"))})),V(t,e,n),[s,l,o,i]}(c),f=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){c=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(u,4),d=f[0],h=f[1],m=f[2],v=f[3];return t>6?(0,r.IX)(o,[d,m,i,v,h]):(0,r.IX)(o,[i]),o}function W(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=(0,r.el)("div",{class:"account-hystory"}),i=(0,r.el)("h2","История переводов",{class:"reset-title account-main-title account-hystory-title"}),c=(0,r.el)("table",{class:"account-hystory-table"}),s=(0,r.el)("thead"),l=(0,r.el)("tr",{class:"account-hystory-table-header"}),u=["Счёт отправителя","Счёт получателя","Сумма","Дата"].map((function(t){return P(t)}));(0,r.IX)(s,[l]),(0,r.IX)(l,u);var f=(0,r.el)("tbody"),d=t.slice(-n).map((function(t){return R(t,e)}));if((0,r.IX)(f,d),(0,r.IX)(c,[s,f]),(0,r.IX)(o,[i,c]),a&&t.length>25){var h=Z(Math.ceil(t.length/n),t,e);(0,r.LI)(o,h)}return o}var F,J,K=n(2181);function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Y(t,e,n){var r,a,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{incoming:null,outing:null},c=1/0,s=-1/0;if(n.forEach((function(t){c=Math.min(c,t),s=Math.max(s,t)})),c=Math.floor(c),s=Math.floor(s),c===s&&(c=0),o){var l=-1/0,u=-1/0;i.incoming.forEach((function(t){return l=Math.max(l,t)})),i.outing.forEach((function(t){return u=Math.max(u,t)})),r=Math.min(l,u)}var f={id:"chartAreaBorder",beforeDraw:function(t,e,n){var r=t.ctx,a=t.chartArea,o=a.left,i=a.top,c=a.width,s=a.height;r.save(),r.strokeStyle=n.borderColor,r.lineWidth=n.borderWidth,r.setLineDash(n.borderDash||[]),r.lineDashOffset=n.borderDashOffset,r.strokeRect(o,i,c,s),r.restore()}};K.kL.defaults.font.size=20,K.kL.defaults.font.family="'Work Sans', sans-serif",K.kL.defaults.font.weight="500",K.kL.defaults.color="#000000";var d=[{label:"",data:n,backgroundColor:"rgb(17, 106, 204)",hoverBackgroundColor:"rgb(17, 106, 204)",barThickness:50}],h=[{label:"",data:i.outing,backgroundColor:"rgba(253, 78, 93, 1)",hoverBackgroundColor:"rgba(253, 78, 93, 1)",barThickness:50},{label:"",data:i.incoming,backgroundColor:"rgba(118, 202, 102, 1)",hoverBackgroundColor:"rgba(118, 202, 102, 1)",barThickness:50}];new K.kL(t,{type:"bar",data:{labels:e,datasets:o?h:d},plugins:[f],options:{maintainAspectRatio:!1,layout:{padding:0},plugins:{tooltip:{enabled:!1},legend:{display:!1},chartAreaBorder:{borderColor:"#000000",borderWidth:1}},scales:{x:{stacked:o,grid:{display:!1}},y:{stacked:o,position:"right",grid:{display:!1},beginAtZero:!1,min:c,max:s,ticks:{callback:function(t){if(t===s||t===c)return this.getLabelForValue(t);a||(a=t);var e=a/2;return o&&t-e<=r&&t+e>r?Math.floor(r):""},padding:10}}}}})}function tt(t){return(0,r.el)("span",t,{class:"form-span account-transfer-span"})}function et(t){return/^\d+[.,]?\d*$/.test(t)}function nt(t){var e=(0,r.el)("canvas",{id:"chart"}),n=(0,r.el)("div",{class:"account-balance"}),a=(0,r.el)("h2",t,{class:"reset-title account-main-title account-balance-title"});return(0,r.IX)(n,[a,e]),[n,e]}function rt(t){var e=["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];return t.map((function(t){return e[t]}))}function at(t,e,n,r){for(var a=[n],o=[],i=[],c=[],s=(new Date).getMonth(),l=s,u=0;u<r;u++)i[u]=0,c[u]=0;for(;r>o.length;)o.push(l),0==l?l=11:l--;for(var f=s,d=0,h=t.length-1;h>=0;h--){for(var m=t[h];new Date(m.date).getMonth()!==f;){0==f?f=11:f--,a.push(n);var v=i[d]+c[d];if(v>0&&(i[d]>0&&(i[d]=c[d]>0?a[d]*(i[d]/v):a[d]),c[d]>0&&(c[d]=i[d]>0?a[d]*(c[d]/v):a[d])),d++,a.length>=r)break}if(m.to===e?(n-=m.amount,i[d]+=m.amount):(n+=m.amount,c[d]+=m.amount),n<0&&(n=0),a.length>=r)break}for(;a.length<r;)a.push(0);for(var p=0;p<r;p++){var y=i[p],g=c[p],b=y+g;b>0&&(y>0&&(i[p]=g>0?a[p]*(y/b):a[p]),g>0&&(c[p]=y>0?a[p]*(g/b):a[p]))}return[rt(o.reverse()),a.reverse(),i.reverse(),c.reverse()]}function ot(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){c=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return it(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?it(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function it(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ct(t){return/^\d+$/.test(t)}function st(t,e){var n=d("account-container"),o=sessionStorage.getItem("token");return H(o,e).then((function(i){var c=[i.transactions,i.account,i.balance],s=c[0],l=c[1],u=c[2],f=U(t,"/accounts","Просмотр счёта"),d=$(l,u),h=(0,r.el)("div",{class:"account-main"}),m=function(){var t=localStorage.getItem("recipients")?localStorage.getItem("recipients").split(" "):[],e=(0,r.el)("form",{class:"form account-transfer"}),n=(0,r.el)("h2","Новый перевод",{class:"reset-title account-main-title account-transfer-title"}),o=(0,r.el)("select",{class:"select account-transfer-select",name:"recipient",id:"recipient",multiple:"multiple"}),i=t.map((function(t){return(0,r.el)("option",t,{class:"option account-transfer-option",value:t})}));o.addEventListener("change",(function(){o.value&&c.focus()})),(0,r.IX)(o,i);var c=(0,r.el)("input",{class:"reset-input form-input account-transfer-amount",id:"amount",type:"text",name:"amount"});c.addEventListener("keypress",(function(t){/\D/.test(t.key)&&"."!==t.key&&","!==t.key&&t.preventDefault()})),c.addEventListener("blur",(function(){et(c.value)?q(c,!0):(q(c),E("Некорректная сумма","error"))}));var s=a("Отправить","btn btn-primary account-transfer-btn",{icon:'<svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M20 20H4C2.89543 20 2 19.1046 2 18V5.913C2.04661 4.84255 2.92853 3.99899 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20ZM4 7.868V18H20V7.868L12 13.2L4 7.868ZM4.8 6L12 10.8L19.2 6H4.8Z" fill="white"/>\n    </svg>\n    ',type:"submit"});return(0,r.IX)(e,[n,tt("Номер счёта получателя"),o,tt("Сумма перевода"),c,s]),[e,o,c]}(),v=ot(m,3),p=v[0],g=v[1],b=v[2],I=W(s,l,10),w=ot(nt("Динамика баланса"),2),x=w[0],k=w[1];[x,I].forEach((function(n){n.addEventListener("click",(function(){t.navigate("/accounts/".concat(e,"/hystory"))}))})),(0,r.IX)(h,[p,x,I]),(0,r.IX)(n,[f,d,h]);var S=ot(at(s,l,u,6),2);Y(k,S[0],S[1]),y(g.id);var X=document.querySelector(".choices__input--cloned"),A=document.querySelector(".choices__inner");X.addEventListener("keypress",(function(t){(g.value||/\D/.test(t.key))&&t.preventDefault()})),X.addEventListener("blur",(function(){ct(X.value)||g.value?q(A,!0):(q(A),E("Некорректный счёт получателя","error"))})),p.addEventListener("submit",(function(n){if(n.preventDefault(),(ct(X.value)||g.value)&&et(b.value)){var a=g.value?g.value:X.value;if(a===l)return q(A),void E("Попытка отправить деньги на тот же счёт","error");(function(t,e,n,r){return fetch("http://localhost:3000/transfer-funds",{method:"POST",body:JSON.stringify({from:t,to:e,amount:n}),headers:{Authorization:"Basic ".concat(r),"Content-Type":"application/json"}}).then((function(t){return t.json()}))})(e,a,b.value.replace(",","."),o).then((function(n){if(null!==n.payload){var o=localStorage.getItem("recipients");if(o){var i=o.split(" ");i.push(a),localStorage.setItem("recipients",Array.from(new Set(i)).join(" "))}else localStorage.setItem("recipients",a);var c=document.querySelector("main");(0,r.IX)(c,[L(),st(t,e)]),E("Перевод отправлен","success")}else switch(n.error){case"Invalid account to":q(A),E("Счёт получателя не существует","error");break;case"Invalid amount":q(b),E("Некорректная сумма","error");break;case"Overdraft prevented":q(b),E("Сумма перевода, больше чем денег на счёте","error")}}))}}))})).finally((function(){return A()})),n}function lt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){c=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ut(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ut(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ft(t,e){var n=d("hystory-container");return H(sessionStorage.getItem("token"),e).then((function(a){var o=a.transactions,i=a.account,c=a.balance,s=U(t,"/accounts/"+e,"История баланса"),l=$(i,c),u=lt(nt("Динамика баланса"),2),f=u[0],d=u[1],h=lt(nt("Соотношение входящих исходящих транзакций"),2),m=h[0],v=h[1],p=lt(at(o,i,c,12),4),y=p[0],g=p[1],b=p[2],I=p[3],w=W(o,i,25,!0),x=(0,r.el)("div",{class:"hystory-main"});(0,r.IX)(x,[f,m,w]),(0,r.IX)(n,[s,l,x]),Y(d,y,g),Y(v,y,g,!0,{incoming:b,outing:I})})).finally((function(){return A()})),n}function dt(t){var e=(0,r.el)("ul",{class:"reset-list exchange-currencies-list"});for(var n in t){var a=t[n];if(a.amount){var o=(0,r.el)("li",{class:"exchange-currencies-item"}),i=(0,r.el)("p",a.code,{class:"reset-text exchange-code"}),c=(0,r.el)("p",x(a.amount),{class:"reset-text exchange-amount"});(0,r.IX)(o,[i,c]),(0,r.LI)(e,o)}}return e}function ht(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function mt(t){var e=(0,r.el)("form",{class:"exchange-form"}),n=(0,r.el)("h2","Обмен валюты",{class:"reset-title exchange-main-title exchange-form-title"}),o=(0,r.el)("div",{class:"exchange-form-currencies"}),i=(0,r.el)("span","Из",{class:"form-span exchange-form-currencies-span from"}),c=(0,r.el)("span","в",{class:"form-span exchange-form-currencies-span to"}),s=["from","to"].map((function(e){return function(t,e){var n=(0,r.el)("select",{class:"select exchange-select",name:t,id:t}),a=e.map((function(t){return(0,r.el)("option",t,{class:"option exchange-option",value:t})}));return(0,r.IX)(n,a),n}(e,t)})),l=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){c=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return ht(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ht(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(s,2),u=l[0],f=l[1];(0,r.IX)(o,[i,u,c,f]);var d=(0,r.el)("div",{class:"exchange-form-amount"}),h=(0,r.el)("span","Сумма",{class:"form-span exchange-form-amount-span"}),m=(0,r.el)("input",{class:"reset-input form-input exchange-form-amount-input",name:"amount",type:"number"});m.addEventListener("keypress",(function(t){/\D/.test(t.key)&&"."!==t.key&&","!==t.key&&t.preventDefault()})),m.addEventListener("blur",(function(){et(m.value)?q(m,!0):(q(m),E("Некорректная сумма","error"))})),(0,r.IX)(d,[h,m]);var v=a("Обменять","btn btn-primary exchange-form-btn",{type:"submit"});return e.addEventListener("submit",(function(t){t.preventDefault();var e=m.value;et(e)?function(t,e,n,r){return fetch("http://localhost:3000/currency-buy",{method:"POST",body:JSON.stringify({from:t,to:e,amount:n}),headers:{Authorization:"Basic ".concat(r),"Content-Type":"application/json"}}).then((function(t){return t.json()}))}(u.value,f.value,e,sessionStorage.getItem("token")).then((function(t){if(null!==t.payload){var e=document.querySelector(".exchange-currencies");document.querySelector(".exchange-currencies-list").remove();var n=dt(t.payload);(0,r.LI)(e,n),m.value="",m.classList.remove("success"),m.classList.remove("error"),E("Обмен валют выполнен","success")}else switch(t.error){case"Overdraft prevented":E("Попытка перевести больше, чем доступно на счёте списания","error"),q(m);break;case"Not enough currency":E("На валютном счёте списания нет средств","error"),q(m)}})):(q(m),E("Некорректная сумма","error"))})),(0,r.IX)(e,[n,o,d,v]),[e,[u,f]]}function vt(t){return fetch("http://localhost:3000/currencies",{method:"GET",headers:{Authorization:"Basic ".concat(t),"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return t.payload}))}function pt(t){return J||(J=fetch("http://localhost:3000/all-currencies",{method:"GET",headers:{Authorization:"Basic ".concat(t),"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return t.payload}))),J}K.kL.register.apply(K.kL,function(t){if(Array.isArray(t))return Q(t)}(F=K.zX)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(F)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(F)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var yt,gt=(0,r.el)("ul",{class:"reset-list exchange-rates-list"}),bt={};function It(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){c=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(t,e)||function(t,e){if(t){if("string"==typeof t)return wt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?wt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var xt,kt=n(7669);function St(){if(xt)return xt;var t=d("banks-container"),e=sessionStorage.getItem("token"),n=(0,r.el)("h1","Карта банкоматов",{class:"reset-title title banks-title"}),a=(0,r.el)("div",{id:"map",class:"banks-map"});return(0,r.IX)(t,[n,a]),function(t){return fetch("http://localhost:3000/banks",{method:"GET",headers:{Authorization:"Basic ".concat(t),"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return t.payload}))}(e).then((function(t){var e;null!==t&&(e=t,kt.Z.load("https://api-maps.yandex.ru/2.1/?lang=ru_RU").then((function(t){t.ready((function(){var n=new t.Map("map",{center:[55.750121480776485,37.59909037548824],zoom:11,controls:["searchControl"]});e.forEach((function(e){var r=new t.Placemark([e.lat,e.lon]);n.geoObjects.add(r)}))}))})))})).finally((function(){return A()})),xt=t,t}var Lt=document.body,Xt=(0,r.el)("main",{class:"main"}),At=new(B())("/");void 0===yt&&((yt=new WebSocket("ws://localhost:3000/currency-feed")).onmessage=function(t){var e=JSON.parse(t.data);"EXCHANGE_RATE_CHANGE"==e.type&&function(t){if(0!=t.change||void 0===bt[t.from+t.to]){var e=-1==t.change,n=(0,r.el)("li",{class:"exchange-rates-item ".concat(e?"down":"up")}),a=(0,r.el)("div",{class:"exchange-rates-code-amount"}),o=(0,r.el)("p","".concat(t.from,"/").concat(t.to),{class:"reset-text exchange-code"}),i=(0,r.el)("p",x(t.rate),{class:"reset-text exchange-amount"}),c=(0,r.el)("span");(0,r.IX)(a,o,i),(0,r.IX)(n,[a,c]),(0,r.LI)(gt,n),bt[t.from+t.to]=n}else(0,r.LI)(gt,bt[t.from+t.to])}(e)}),At.on("/",(function(){sessionStorage.getItem("token")&&At.navigate("/accounts?sort=byBalance"),(0,r.IX)(Xt,[_(At)]),(0,r.IX)(Lt,[h(At),Xt])})).on("/accounts",(function(t){sessionStorage.getItem("token")||At.navigate("/");var e=null!==t.params?t.params.sort:"byBalance";(0,r.IX)(Xt,[L(),M(At,e)]),(0,r.IX)(Lt,[h(At,!0,"Счета"),Xt])})).on("/accounts/:id",(function(t){sessionStorage.getItem("token")||At.navigate("/"),(0,r.IX)(Xt,[L(),st(At,t.data.id)]),(0,r.IX)(Lt,[h(At,!0),Xt])})).on("/accounts/:id/hystory",(function(t){sessionStorage.getItem("token")||At.navigate("/"),(0,r.IX)(Xt,[L(),ft(At,t.data.id)]),(0,r.IX)(Lt,[h(At,!0),Xt])})).on("/exchange",(function(){var t,e,n,a,o;sessionStorage.getItem("token")||At.navigate("/"),(0,r.IX)(Xt,[L(),(t=sessionStorage.getItem("token"),e=d("exchange-container"),n=(0,r.el)("h1","Валютный обмен",{class:"reset-title title exchange-title"}),a=(0,r.el)("div",{class:"exchange-main"}),o=function(){var t=(0,r.el)("div",{class:"exchange-rates"}),e=(0,r.el)("h2","Изменение курсов в реальном времени",{class:"reset-title exchange-main-title"});return(0,r.IX)(t,[e,gt]),t}(),Promise.all([vt(t),pt(t)]).then((function(t){var e=It(t,2),n=e[0],i=e[1],c=function(t){var e=(0,r.el)("div",{class:"exchange-currencies"}),n=(0,r.el)("h2","Ваши валюты",{class:"reset-title exchange-main-title"}),a=dt(t);return(0,r.IX)(e,[n,a]),e}(n),s=It(mt(i),2),l=s[0],u=s[1];return(0,r.IX)(a,[c,l,o]),u})).then((function(t){t.map((function(t){return y(t.id,{sort:!0})}))})).finally((function(){return A()})),(0,r.IX)(e,[n,a]),e)]),(0,r.IX)(Lt,[h(At,!0,"Валюта"),Xt])})).on("/banks",(function(){sessionStorage.getItem("token")||At.navigate("/"),(0,r.IX)(Xt,[L(),St()]),(0,r.IX)(Lt,[h(At,!0,"Банкоматы"),Xt])})).notFound((function(){At.navigate("/")})).resolve()}},t=>{t.O(0,[216],(()=>(9074,t(t.s=9074)))),t.O()}]);