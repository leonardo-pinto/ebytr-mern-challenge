import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import Header from '../components/header/Header';
import { renderWithRouterAndRedux } from '../services/renderWithRouterAndRedux';

const initialState = {
  user: {
    name: 'username',
    email: 'email@email.com',
    userId: 'user id',
    token: 'valid token',
  },
};

const signoutBtnId = 'signout-btn';
const usernameTextId = 'username-text';
const titleId = 'title';
const todoIconId = 'todo-icon';

describe('Header component', () => {
  it('renders all texts, buttons and icons', () => {
    renderWithRouterAndRedux(
      <Header />, { route: '/' }, initialState,
    );

    const signoutBtn = screen.getByTestId(signoutBtnId);
    const usernameText = screen.getByTestId(usernameTextId);
    const title = screen.getByTestId(titleId);
    const todoIcon = screen.getByTestId(todoIconId);

    expect(signoutBtn).toBeInTheDocument();
    expect(usernameText).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(todoIcon).toBeInTheDocument();
  });

  it('signout button changes the store state', () => {
    const { store } = renderWithRouterAndRedux(
      <Header />, { route: '/' }, initialState,
    );

    const expectedState = {
      user: {
        name: null,
        email: null,
        userId: null,
        token: null,
      },
    };

    const signoutBtn = screen.getByTestId(signoutBtnId);
    fireEvent.click(signoutBtn);

    expect(store.getState().user).toEqual(expectedState.user);
  });
});
