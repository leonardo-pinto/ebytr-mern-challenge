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
    .then((res) => localStorage.setItem('token', res.data.token))
    .catch((err) => console.log(err));
}

export function signUp(name, email, password) {
  axios.post(`${apiUrl}/signup`, { name, email, password })
    .then((res) => console.log(res.data.message))
    .catch((err) => console.log(err));
}
