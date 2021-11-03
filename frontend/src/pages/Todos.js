import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import AddTodo from '../components/AddTodo';
import ListTodos from '../components/ListTodos';

function Todos() {
  const user = useSelector((state) => state.user);

  if (!user.userId) return <Redirect to="/login" />;

  return (
    <div>
      <Header />
      <AddTodo />
      <ListTodos />
      Todos page
    </div>
  );
}

export default Todos;
