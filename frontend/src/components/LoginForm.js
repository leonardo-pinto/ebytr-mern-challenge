import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../redux/actions/userActions';

function LoginForm() {
  const dispatch = useDispatch();
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
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  useEffect(() => {
    const format = /\S+@\S+\.\S+/;
    const minPasswordLength = 6;
    if (password.length > minPasswordLength && email.match(format)) {
      setDisableLoginBtn(false);
    } else {
      setDisableLoginBtn(true);
    }
  }, [email, password]);

  return (
    <form
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
        type="submit"
        data-testid="button-login"
        disabled={ disableLoginBtn }
      >
        Login
      </button>
      <div>
        <p>Don&apos;t have an account?</p>
        <Link to="/signup">Sign Up now!</Link>
      </div>
    </form>
  );
}

export default LoginForm;
