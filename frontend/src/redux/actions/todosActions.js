import axios from 'axios';
import { toast } from 'react-toastify';
import { apiUrl, setHeaders } from '../../services/todosServices';

export const getTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/todos`, setHeaders());

    dispatch({
      type: 'GET_TODOS',
      todo: response.data,
    });
  } catch (err) {
    console.log(err.response);
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.post(`${apiUrl}/todos`, { todo }, setHeaders());

    dispatch({
      type: 'ADD_TODO',
      todo: response.data,
    });
    console.log('pós dispatch');
  } catch (err) {
    console.log(err.response);
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const deleteTodo = (_id) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/todos/${_id}`, setHeaders());
    dispatch({
      type: 'DELETE_TODO',
      _id,
    });
  } catch (err) {
    console.log(err.response);
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const updateTodo = (editedTodo) => async (dispatch) => {
  const { _id, todo, status, createdAt } = editedTodo;

  try {
    await axios.put(`${apiUrl}/todos/${_id}`, { todo, status, createdAt }, setHeaders());

    dispatch({
      type: 'UPDATE_TODO',
      _id,
      todo,
      status,
      createdAt,
    });
  } catch (err) {
    console.log(err.response);
    toast.error(err.response.data.message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const sortTodos = (parameter, order) => (dispatch) => {
  dispatch({
    type: 'SORT_TODO',
    parameter,
    order,
  });
};
