import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

function Login() {
  const user = useSelector((state) => state.user);

  if (user && user.userId) return <Redirect to="/" />;

  return (
    <>
      {/* <Header /> */}
      <SignupForm />
    </>
  );
}

export default Login;
