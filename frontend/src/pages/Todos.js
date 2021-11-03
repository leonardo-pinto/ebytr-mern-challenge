import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import userContext from '../context/userContext';

function Todos() {
  const { userData } = useContext(userContext);

  if (!userData) return <Redirect to="/login" />;

  return (
    <div>
      Todos page
    </div>
  );
}

export default Todos;
