import axios from 'axios';
import { toast } from 'react-toastify';
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

    return response;
  } catch (err) {
    console.log(err.response);
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const signUp = (name, email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/signup`, { name, email, password });

    dispatch({
      type: 'SIGNUP',
    });
    toast.success(response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  } catch (err) {
    console.log(err.response);
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
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
