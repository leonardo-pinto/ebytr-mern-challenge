import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import userContext from '../context/userContext';
import Header from '../components/Header';

function Todos() {
  const { userData } = useContext(userContext);

  if (!userData) return <Redirect to="/login" />;

  return (
    <div>
      <Header />
      Todos page
    </div>
  );
}

export default Todos;
