import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/actions/userActions';

function SignupForm() {
  const dispatch = useDispatch();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(name, email, password));
  };

  return (
    <form
      onSubmit={ handleSubmit }
    >
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
        data-testid="button-signup"
        disabled={ disableSignupBtn }
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
