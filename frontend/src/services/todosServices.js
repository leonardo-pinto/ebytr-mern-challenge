import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export function login(email, password) {
  return axios.post(`${apiUrl}/login`, { email, password })
    .then((token) => localStorage.setItem('token', token))
    .catch((err) => console.log(err));
}

export function signUp() {
  console.log('teste');
}
