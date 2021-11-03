import axios from 'axios';
import { apiUrl } from '../../services/todosServices';

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token');

  dispatch({
    type: 'SIGNOUT',
  });
};

export const userLogin = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, { email, password });
    localStorage.setItem('token', response.data.token);

    dispatch({
      type: 'LOGIN',
      token: response.data.token,
    });
  } catch (err) {
    console.log(err);
  }
};

export const signUp = (name, email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/signup`, { name, email, password });
    console.log(response.data.message);

    dispatch({
      type: 'SIGNUP',
    });
  } catch (err) {
    console.log(err);
  }
};

export const loadUser = () => (dispatch, getState) => {
  const { token } = getState().user;
  if (token) {
    return dispatch({
      type: 'LOAD_USER',
      token,
    });
  }

  return null;
};
