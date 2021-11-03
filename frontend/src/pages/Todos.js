import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';

function Todos() {
  const [todo, setTodo] = useState('');
  const user = useSelector((state) => state.user);

  if (!user.userId) return <Redirect to="/login" />;

  return (
    <div>
      <Header />
      <AddTodo todo={ todo } setTodo={ setTodo } />
      Todos page
    </div>
  );
}

export default Todos;
