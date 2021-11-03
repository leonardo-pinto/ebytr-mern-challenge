import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
// import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import userContext from '../context/userContext';

function Login() {
  const { userData } = useContext(userContext);

  if (userData && userData.userId) return <Redirect to="/" />;

  return (
    <>
      {/* <Header /> */}
      <LoginForm />
    </>
  );
}

export default Login;
