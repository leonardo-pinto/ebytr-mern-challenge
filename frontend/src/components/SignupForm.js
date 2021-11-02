import React, { useState, useEffect } from 'react';
import { signUp } from '../services/todosServices';

function SignupForm() {
  const [signupInput, setSignupInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = signupInput;
  const [disableSignupBtn, setDisableSignupBtn] = useState(true);

  const handleSignupInput = ({ target: { name: nameInput, value } }) => {
    setSignupInput({
      ...signupInput,
      [nameInput]: value,
    });
  };

  useEffect(() => {
    const format = /\S+@\S+\.\S+/;
    const minNameLength = 5;
    const minPasswordLength = 6;
    if (
      name.length > minNameLength
      && password.length > minPasswordLength
      && email.match(format)) {
      setDisableSignupBtn(false);
    } else {
      setDisableSignupBtn(true);
    }
  }, [name, email, password]);

  return (
    <form>
      <label htmlFor="name">
        <input
          name="name"
          type="text"
          data-testid="name-input-signup"
          value={ name }
          placeholder="Insert your name"
          onChange={ handleSignupInput }
        />
      </label>
      <label htmlFor="email">
        <input
          name="email"
          type="email"
          data-testid="email-input-signup"
          value={ email }
          placeholder="Insert your email"
          onChange={ handleSignupInput }
        />
      </label>
      <label htmlFor="password">
        <input
          name="password"
          type="password"
          value={ password }
          data-testid="password-input-signup"
          placeholder="Insert your password"
          onChange={ handleSignupInput }
        />
      </label>
      <button
        type="button"
        data-testid="button-login"
        disabled={ disableSignupBtn }
        onClick={ () => signUp(name, email, password) }
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
