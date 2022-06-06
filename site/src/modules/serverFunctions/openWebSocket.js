import { addItemTOExchangeList } from '../exchange/createExchangeRate';
let socket;

export default function openWebSocket() {
  if (socket === undefined) {
    socket = new WebSocket('ws://localhost:3000/currency-feed');

    socket.onmessage = function (event) {
      const data = JSON.parse(event.data);
      if (data.type == 'EXCHANGE_RATE_CHANGE') addItemTOExchangeList(data);
    };
  }

  return socket;
}
