export default function createNewAccount() {
  return fetch('http://localhost:3000/create-account', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${sessionStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
}
