import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import ListTodos from '../components/todos/ListTodos';
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

const noTodosId = 'no-todos';

jest.mock('axios');

describe('ListTodos component', () => {
  it('renders the text "No Todos" when there are no todos', () => {
    const response = {
      data: [],
    };

    axios.get.mockResolvedValueOnce(response);

    renderWithRouterAndRedux(
      <ListTodos />, { route: '/' }, initialState,
    );

    const noTodos = screen.getByTestId(noTodosId);

    expect(noTodos).toBeInTheDocument();
  });
});
