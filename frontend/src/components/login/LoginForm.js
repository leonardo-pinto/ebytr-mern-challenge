import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../../redux/actions/userActions';

const disabledBtnStyle = `border-black bg-gray-400 border-2 border-black
text-whitefont-bold py-2 px-4 rounded-full m-3 sm:text-xl`;
const enabledBtnStyle = `border-black border-2 bg-green-400 text-white border-black
font-bold py-2 px-4 rounded-full m-3 sm:text-xl`;

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
          name="email"
          className="w-3/4 py-2 px-3 my-2 rounded
          focus:ring-2 focus:ring-black text-black"
          type="email"
          data-testid="email-input-login"
          value={ email }
          placeholder="Insert your email"
          onChange={ handleLoginInput }
        />
        <input
          name="password"
          className="w-3/4 py-2 px-3 my-2 rounded
          focus:ring-2 focus:ring-black text-black"
          type="password"
          value={ password }
          data-testid="password-input-login"
          placeholder="Insert your password"
          onChange={ handleLoginInput }
        />
        <button
          type="submit"
          className={ disableLoginBtn
            ? disabledBtnStyle
            : enabledBtnStyle }
          data-testid="button-login"
          disabled={ disableLoginBtn }
        >
          Login
        </button>
      </form>
      <div className="flex flex-col justify-center items-center p-1">
        <p
          className="p-1 text-lg sm:text-xl md:text-2xl"
        >
          Don&apos;t have an account?
        </p>
        <Link
          className="font-semibold p-1 sm:text-lg md:text-xl"
          to="/signup"
        >
          Sign Up now!

        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
