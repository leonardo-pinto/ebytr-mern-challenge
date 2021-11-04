import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../redux/actions/userActions';
import { todoIcon } from '../services/todosIcons';

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
    console.log('handleSubmit');
    dispatch(signUp(name, email, password));
  };

  return (
    <div
      className="p-2 flex flex-col justify-center
    items-center bg-purple-100 mx-auto border-2
    border-solid border-black rounded-lg w-4/5 sm:w-2/4 md:w-5/12"
    >
      <div className="flex justify-center items-center p-4">
        {todoIcon()}
        <h1 className="text-2xl">EBYRT To Do List</h1>
      </div>
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={ handleSubmit }
      >
        <input
          name="name"
          className="w-3/4 py-2 px-3 my-2 rounded
          focus:ring-2 focus:ring-blue-600 text-gray-700"
          type="text"
          data-testid="name-input-signup"
          value={ name }
          placeholder="Insert your name"
          onChange={ handleSignupInput }
        />
        <input
          name="email"
          className="w-3/4 py-2 px-3 my-2 rounded
          focus:ring-2 focus:ring-blue-600 text-gray-700"
          type="email"
          data-testid="email-input-signup"
          value={ email }
          placeholder="Insert your email"
          onChange={ handleSignupInput }
        />
        <input
          name="password"
          className="w-3/4 py-2 px-3 my-2 rounded
          focus:ring-2 focus:ring-blue-600 text-gray-700"
          type="password"
          value={ password }
          data-testid="password-input-signup"
          placeholder="Insert your password"
          onChange={ handleSignupInput }
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded-full m-3"
          data-testid="button-signup"
          disabled={ disableSignupBtn }
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
