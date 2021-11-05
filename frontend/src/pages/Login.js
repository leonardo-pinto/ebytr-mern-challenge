import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import LoginForm from '../components/login/LoginForm';
import Title from '../components/title/Title';

function Login() {
  const user = useSelector((state) => state.user);

  if (user && user.userId) return <Redirect to="/" />;

  return (
    <>
      <Title />
      <ToastContainer />
      <LoginForm />
    </>
  );
}

export default Login;
