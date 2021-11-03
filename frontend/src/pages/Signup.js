import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
// import Header from '../components/Header';
import SignupForm from '../components/SignupForm';
import userContext from '../context/userContext';

function Login() {
  const { userData } = useContext(userContext);

  if (userData && userData.userId) return <Redirect to="/" />;

  return (
    <>
      {/* <Header /> */}
      <SignupForm />
    </>
  );
}

export default Login;
