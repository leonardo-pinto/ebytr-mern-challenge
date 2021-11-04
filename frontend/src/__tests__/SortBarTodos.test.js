import React from 'react';
// import axios from 'axios';
import '@testing-library/jest-dom';
import {
  screen, fireEvent,
} from '@testing-library/react';
// import { apiUrl } from '../services/todosServices';
import SortBarTodos from '../components/todos/SortBarTodos';
import { renderWithRouterAndRedux } from '../services/renderWithRouterAndRedux';

const initialState = {
  user: {
    name: null,
    email: null,
    userId: null,
    token: null,
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

  // it('store is updated after clicking on the desc sort button', () => {
  //   const { store } = renderWithRouterAndRedux(
  //     <SortBarTodos />, { route: '/' }, initialState,
  //   );

  //   expect(store.getState().user.order).toBe('asc');

  //   const sortDesBtn = screen.getByTestId(sortDesBtnId);

  //   fireEvent.click(sortDesBtn);

  //   expect(store.getState().user.order).toBe('des');
  // });
});
