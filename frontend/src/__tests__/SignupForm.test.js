import React from 'react';
// import axios from 'axios';
import '@testing-library/jest-dom';
import {
  screen, fireEvent,
} from '@testing-library/react';
// import { apiUrl } from '../services/todosServices';
import SignupForm from '../components/signup/SignupForm';
import { renderWithRouterAndRedux } from '../services/renderWithRouterAndRedux';

const initialState = {
  user: {
    name: null,
    email: null,
    userId: null,
    token: null,
  },
};

const nameInputId = 'name-input-signup';
const emailInputId = 'email-input-signup';
const passwordInputId = 'password-input-signup';
const signupBtnId = 'button-signup';

jest.mock('axios');

describe('SignupForm component', () => {
  it('renders all inputs and buttons', () => {
    renderWithRouterAndRedux(
      <SignupForm />, { route: '/signup' }, initialState,
    );

    const name = screen.getByTestId(nameInputId);
    const email = screen.getByTestId(emailInputId);
    const password = screen.getByTestId(passwordInputId);
    const signupBtn = screen.getByTestId(signupBtnId);

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(signupBtn).toBeInTheDocument();
  });

  it('user is able to fill name, email and password inputs', () => {
    renderWithRouterAndRedux(
      <SignupForm />, { route: '/login' }, initialState,
    );

    const name = screen.getByTestId(nameInputId);
    const email = screen.getByTestId(emailInputId);
    const password = screen.getByTestId(passwordInputId);

    fireEvent.change(name, { target: { value: 'test name input' } });
    fireEvent.change(email, { target: { value: 'test email input' } });
    fireEvent.change(password, { target: { value: 'test password input' } });
    expect(email.value).toBe('test email input');
    expect(password.value).toBe('test password input');
  });

  it('signup button is enabled after valid name, email and password formats', () => {
    renderWithRouterAndRedux(
      <SignupForm />, { route: '/login' }, initialState,
    );

    const name = screen.getByTestId(nameInputId);
    const email = screen.getByTestId(emailInputId);
    const password = screen.getByTestId(passwordInputId);
    const signupBtn = screen.getByTestId(signupBtnId);

    expect(signupBtn).toHaveAttribute('disabled');

    fireEvent.change(name, { target: { value: 'User name' } });
    fireEvent.change(email, { target: { value: 'email@email.com' } });
    fireEvent.change(password, { target: { value: '123456789' } });

    expect(signupBtn).not.toHaveAttribute('disabled');
  });
});