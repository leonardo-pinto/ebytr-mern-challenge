import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import {
  screen, fireEvent,
} from '@testing-library/react';
import { apiUrl, setHeaders } from '../services/todosServices';
import AddTodo from '../components/todos/AddTodo';
import { renderWithRouterAndRedux } from '../services/renderWithRouterAndRedux';

const initialState = {
  todos: {
    todos: [],
    sort: {
      parameter: 'createdAt',
      order: 'asc',
    },
  },
};

const todoInputId = 'todo-input';
const addTodoBtnId = 'add-todo-btn';
const addTodoIconId = 'add-icon';

jest.mock('axios');

describe('AddTodo component', () => {
  it('renders all inputs, buttons and icons', () => {
    renderWithRouterAndRedux(
      <AddTodo />, { route: '/' }, initialState,
    );

    const todoInput = screen.getByTestId(todoInputId);
    const addTodoBtn = screen.getByTestId(addTodoBtnId);
    const addTodoIcon = screen.getByTestId(addTodoIconId);

    expect(todoInput).toBeInTheDocument();
    expect(addTodoBtn).toBeInTheDocument();
    expect(addTodoIcon).toBeInTheDocument();
  });

  it('user is able to fill todo input', () => {
    renderWithRouterAndRedux(
      <AddTodo />, { route: '/' }, initialState,
    );

    const todoInput = screen.getByTestId(todoInputId);

    fireEvent.change(todoInput, { target: { value: 'test todo input' } });

    expect(todoInput.value).toBe('test todo input');
  });

  it('the correct endpoint is called after adding a todo', () => {
    renderWithRouterAndRedux(
      <AddTodo />, { route: '/' }, initialState,
    );

    localStorage.setItem('token', 'token example');

    const response = {
      data: {
        createdAt: 'createdDate',
        status: 'todo status',
        todo: 'todo text',
        userId: 'user id',
        _id: 'todo id',
      },
    };

    axios.post.mockResolvedValueOnce(response);

    const todoInput = screen.getByTestId(todoInputId);
    const addTodoBtn = screen.getByTestId(addTodoBtnId);

    fireEvent.change(todoInput, { target: { value: 'new todo' } });

    const todo = todoInput.value;
    fireEvent.click(addTodoBtn);

    expect(axios.post)
      .toHaveBeenCalledWith(`${apiUrl}/todos`, { todo }, setHeaders());
  });
});
