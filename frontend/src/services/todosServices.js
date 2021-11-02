import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const setHeaders = () => {
  const header = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };

  return header;
};

export function login(email, password) {
  axios.post(`${apiUrl}/login`, { email, password })
    .then((token) => localStorage.setItem('token', token))
    .catch((err) => console.log('mensagem de erro', err));
}

export function signUp() {
  console.log('teste');
}
