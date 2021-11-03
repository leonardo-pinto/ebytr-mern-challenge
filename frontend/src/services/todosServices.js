import axios from 'axios';
import jwtDecode from 'jwt-decode';

require('dotenv').config();

const apiUrl = 'http://localhost:5000';

export function setHeaders() {
  const header = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };

  return header;
}

export function login(email, password) {
  axios.post(`${apiUrl}/login`, { email, password })
    .then((res) => localStorage.setItem('token', res.data.token))
    .catch((err) => console.log(err.response.data.message));
}

export function signUp(name, email, password) {
  axios.post(`${apiUrl}/signup`, { name, email, password })
    .then((res) => console.log(res.data.message))
    .catch((err) => console.log(err.response.data.message));
}

export function retrieveUserDataFromToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }
  return jwtDecode(token).data;
}
