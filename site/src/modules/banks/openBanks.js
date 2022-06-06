import { el, setChildren } from 'redom';
import createContainer from '../createContainer';
import getCoordinates from '../serverFunctions/getCoordinates';
import ymaps from 'ymaps';
import { hideSpinner } from '../spinner/spinner';

let banksBlock;

function createMap(pointsList) {
  ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then((maps) => {
    maps.ready(function () {
      var myMap = new maps.Map('map', {
        center: [55.750121480776485, 37.59909037548824],
        zoom: 11,
        controls: ['searchControl'],
      });

      pointsList.forEach((item) => {
        const placemark = new maps.Placemark([item.lat, item.lon]);
        myMap.geoObjects.add(placemark);
      });
    });
  });
}

export default function openBanks() {
  if (banksBlock) return banksBlock;
  const container = createContainer('banks-container');
  const token = sessionStorage.getItem('token');
  const title = el('h1', 'Карта банкоматов', {
    class: 'reset-title title banks-title',
  });

  const map = el('div', {
    id: 'map',
    class: 'banks-map',
  });
  setChildren(container, [title, map]);

  getCoordinates(token)
    .then((res) => {
      if (res !== null) createMap(res);
    })
    .finally(() => hideSpinner());

  banksBlock = container;
  return container;
}
