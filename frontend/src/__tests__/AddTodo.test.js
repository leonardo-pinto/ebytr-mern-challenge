import React from 'react';
// import axios from 'axios';
import '@testing-library/jest-dom';
import {
  screen, fireEvent,
} from '@testing-library/react';
// import { apiUrl } from '../services/todosServices';
import AddTodo from '../components/todos/AddTodo';
import { renderWithRouterAndRedux } from '../services/renderWithRouterAndRedux';

const initialState = {
  user: {
    name: null,
    email: null,
    userId: null,
    token: null,
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
});
