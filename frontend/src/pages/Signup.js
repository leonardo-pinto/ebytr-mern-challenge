import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import SignupForm from '../components/signup/SignupForm';

function Login() {
  const user = useSelector((state) => state.user);

  if (user && user.userId) return <Redirect to="/" />;

  return (
    <>
      <ToastContainer />
      <SignupForm />
    </>
  );
}

export default Login;
