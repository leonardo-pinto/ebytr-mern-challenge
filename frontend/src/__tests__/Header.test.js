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

describe('Header component', () => {
  it('renders all texts, buttons and icons', () => {
    renderWithRouterAndRedux(
      <Header />, { route: '/' }, initialState,
    );

    const signoutBtn = screen.getByTestId(signoutBtnId);
    const usernameText = screen.getByTestId(usernameTextId);

    expect(signoutBtn).toBeInTheDocument();
    expect(usernameText).toBeInTheDocument();
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
