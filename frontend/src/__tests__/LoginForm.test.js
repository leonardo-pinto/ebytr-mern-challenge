import React from 'react';
import '@testing-library/jest-dom';
import {
  screen, fireEvent,
} from '@testing-library/react';
import LoginForm from '../components/login/LoginForm';
import { renderWithRouterAndRedux } from '../services/renderWithRouterAndRedux';

const initialState = {
  user: {
    name: null,
    email: null,
    userId: null,
    token: null,
  },
};

const emailInputId = 'email-input-login';
const passwordInputId = 'password-input-login';
const loginBtnId = 'button-login';

jest.mock('axios');

describe('LoginForm component', () => {
  it('renders all inputs and buttons', () => {
    renderWithRouterAndRedux(
      <LoginForm />, { route: '/login' }, initialState,
    );

    const email = screen.getByTestId(emailInputId);
    const password = screen.getByTestId(passwordInputId);
    const loginBtn = screen.getByTestId(loginBtnId);
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it('user is able to fill email and password inputs', () => {
    renderWithRouterAndRedux(
      <LoginForm />, { route: '/login' }, initialState,
    );

    const email = screen.getByTestId(emailInputId);
    const password = screen.getByTestId(passwordInputId);

    fireEvent.change(email, { target: { value: 'test email input' } });
    fireEvent.change(password, { target: { value: 'test password input' } });
    expect(email.value).toBe('test email input');
    expect(password.value).toBe('test password input');
  });

  it('login button is enabled after valid email and password formats', () => {
    renderWithRouterAndRedux(
      <LoginForm />, { route: '/login' }, initialState,
    );

    const email = screen.getByTestId(emailInputId);
    const password = screen.getByTestId(passwordInputId);
    const loginBtn = screen.getByTestId(loginBtnId);

    expect(loginBtn).toHaveAttribute('disabled');

    fireEvent.change(email, { target: { value: 'email@email.com' } });
    fireEvent.change(password, { target: { value: '123456789' } });

    expect(loginBtn).not.toHaveAttribute('disabled');
  });
});
