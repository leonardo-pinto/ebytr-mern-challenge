import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const apiUrl = 'http://localhost:5000';

export function setHeaders() {
  const header = {
    headers: {
      authorization: localStorage.getItem('token'),
    },
  };

  return header;
}

// export async function login(email, password) {
//   try {
//     const response = await axios.post(`${apiUrl}/login`, { email, password });
//     localStorage.setItem('token', response.data.token);
//   } catch (err) {
//     console.log(err.response.data.message);
//   }
// }

// export async function addTodo(todo) {
//   try {
//     const response = await axios.post(`${apiUrl}/todos`, { todo }, setHeaders());
//     return response;
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function getTodos() {
  try {
    const response = await axios.get(`${apiUrl}/todos`, setHeaders());
    return response;
  } catch (err) {
    console.log(err);
  }
}

// export function signUp(name, email, password) {
//   axios.post(`${apiUrl}/signup`, { name, email, password })
//     .then((res) => console.log(res.data.message))
//     .catch((err) => console.log(err.response.data.message));
// }

export function retrieveUserDataFromToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  return jwtDecode(token).data;
}
