import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
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

  it('changes order attribute in state todos after clicking on sorting buttons', () => {
    const { store } = renderWithRouterAndRedux(
      <SortBarTodos />, { route: '/' }, initialState,
    );

    const sortDesBtn = screen.getByTestId(sortDesBtnId);
    fireEvent.click(sortDesBtn);

    expect(store.getState().todos.sort.order).toEqual('des');

    const sortAscBtn = screen.getByTestId(sortAscBtnId);
    fireEvent.click(sortAscBtn);

    expect(store.getState().todos.sort.order).toEqual('asc');
  });
});
