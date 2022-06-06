export default function auth(login, password) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({
      login: login,
      password: password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.payload) sessionStorage.setItem('token', res.payload.token);
      return res;
    });
}
