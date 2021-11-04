import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import LoginForm from '../components/LoginForm';

function Login() {
  const user = useSelector((state) => state.user);

  if (user && user.userId) return <Redirect to="/" />;

  return (
    <>
      <ToastContainer />
      <LoginForm />
    </>
  );
}

export default Login;
