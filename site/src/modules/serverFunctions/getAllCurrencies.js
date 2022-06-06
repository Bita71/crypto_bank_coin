let currencies;

export default function getAllCurrencies(token) {
  if (!currencies) {
    currencies = fetch(`http://localhost:3000/all-currencies`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => res.payload);
  }
  return currencies;
}
