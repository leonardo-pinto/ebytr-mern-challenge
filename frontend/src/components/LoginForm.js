import React, { useState, useEffect } from 'react';
import { login } from '../services/todosServices';

function LoginForm() {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginInput;
  const [disableLoginBtn, setDisableLoginBtn] = useState(true);

  const handleLoginInput = ({ target: { name, value } }) => {
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log('handleSubmit');
    e.preventDefault();
    login(email, password);
    console.log('pós handleSubmit');
  };

  useEffect(() => {
    const format = /\S+@\S+\.\S+/;
    const minPassword = 6;
    if (password.length > minPassword && email.match(format)) {
      setDisableLoginBtn(false);
    } else {
      setDisableLoginBtn(true);
    }
  }, [email, password]);

  return (
    <form
      autoComplete="off"
      onSubmit={ handleSubmit }
    >
      <label htmlFor="email">
        <input
          name="email"
          type="email"
          data-testid="email-input-login"
          value={ email }
          placeholder="Insert your email"
          onChange={ handleLoginInput }
        />
      </label>
      <label htmlFor="password">
        <input
          name="password"
          type="password"
          value={ password }
          data-testid="password-input-login"
          placeholder="Insert your password"
          onChange={ handleLoginInput }
        />
      </label>
      <button
        type="button"
        data-testid="button-login"
        disabled={ disableLoginBtn }
        onClick={ () => login(email, password) }
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
