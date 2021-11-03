/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { apiUrl, setHeaders } from '../../services/todosServices';

export const getTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/todos`, setHeaders());

    dispatch({
      type: 'GET_TODOS',
      todo: response,
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/todos`, { todo }, setHeaders());

    dispatch({
      type: 'ADD_TODO',
      todo: response,
    });
  } catch (err) {
    console.log(err);
  }
};
