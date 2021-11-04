import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import {
  screen, fireEvent,
} from '@testing-library/react';
import { apiUrl } from '../services/todosServices';
import LoginForm from '../components/login/LoginForm';
import { renderWithRouterAndRedux } from '../services/renderWithRouterAndRedux';

require('dotenv').config();

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

  it('if login credentials are valid, the correct endpoint is called', async () => {
    const response = {
      data: {
        token: process.env.TEST_TOKEN,
      },
    };

    renderWithRouterAndRedux(
      <LoginForm />, { route: '/login' }, initialState,
    );

    const emailInput = screen.getByTestId(emailInputId);
    const passwordInput = screen.getByTestId(passwordInputId);
    const loginBtn = screen.getByTestId(loginBtnId);

    fireEvent.change(emailInput, { target: { value: process.env.TEST_EMAIL } });
    fireEvent.change(passwordInput, { target: { value: process.env.TEST_PASSWORD } });

    axios.post.mockResolvedValueOnce(response);

    fireEvent.click(loginBtn);

    const email = emailInput.value;
    const password = passwordInput.value;

    expect(axios.post)
      .toHaveBeenCalledWith(`${apiUrl}/login`, { email, password });
  });
});
