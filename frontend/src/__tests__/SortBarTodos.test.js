import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import SortBarTodos from '../components/todos/SortBarTodos';
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

const selectInputId = 'select-parameter';
const sortAscBtnId = 'sort-asc-btn';
const sortDesBtnId = 'sort-des-btn';
const sortAscIconId = 'sort-asc-icon';
const sortDesIconId = 'sort-des-icon';

jest.mock('axios');

describe('SortBarTodos component', () => {
  it('renders all inputs and buttons', () => {
    renderWithRouterAndRedux(
      <SortBarTodos />, { route: '/' }, initialState,
    );

    const selectInput = screen.getByTestId(selectInputId);
    const sortAscBtn = screen.getByTestId(sortAscBtnId);
    const sortDesBtn = screen.getByTestId(sortDesBtnId);
    const sortAscIcon = screen.getByTestId(sortAscIconId);
    const sortDesIcon = screen.getByTestId(sortDesIconId);

    expect(selectInput).toBeInTheDocument();
    expect(sortAscBtn).toBeInTheDocument();
    expect(sortDesBtn).toBeInTheDocument();
    expect(sortAscIcon).toBeInTheDocument();
    expect(sortDesIcon).toBeInTheDocument();
  });
});
