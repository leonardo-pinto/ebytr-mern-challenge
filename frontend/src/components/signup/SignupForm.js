import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../../redux/actions/userActions';

function SignupForm() {
  const history = useHistory();
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
    history.push('/login');
  };

  return (
    <div
      className="p-2 flex flex-col justify-center
      items-center bg-green-400 heropattern-charliebrown-gray-200 mx-auto border-2
      border-solid border-black rounded-lg w-4/5 sm:w-2/4 md:w-5/12"
    >
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={ handleSubmit }
      >
        <input
          name="name"
          className="w-3/4 py-2 px-3 my-2 rounded
          focus:ring-2 focus:ring-black text-black"
          type="text"
          data-testid="name-input-signup"
          value={ name }
          placeholder="Insert your name"
          onChange={ handleSignupInput }
        />
        <input
          name="email"
          className="w-3/4 py-2 px-3 my-2 rounded
          focus:ring-2 focus:ring-black text-black"
          type="email"
          data-testid="email-input-signup"
          value={ email }
          placeholder="Insert your email"
          onChange={ handleSignupInput }
        />
        <input
          name="password"
          className="w-3/4 py-2 px-3 my-2 rounded
          focus:ring-2 focus:ring-black text-black"
          type="password"
          value={ password }
          data-testid="password-input-signup"
          placeholder="Insert your password"
          onChange={ handleSignupInput }
        />
        <button
          type="submit"
          className="bg-black text-white
          font-bold py-2 px-4 rounded-full m-3 sm:text-xl"
          data-testid="button-signup"
          disabled={ disableSignupBtn }
        >
          Sign Up
        </button>
        <Link to="/login">
          <button
            type="button"
            className="bg-black text-white
            font-bold py-2 px-4 rounded-full m-3 sm:text-xl"
            data-testid="return-login"
          >
            Return to login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignupForm;
