import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Header from '../components/header/Header';
import AddTodo from '../components/todos/AddTodo';
import SortBarTodos from '../components/todos/SortBarTodos';
import ListTodos from '../components/todos/ListTodos';

function Todos() {
  const user = useSelector((state) => state.user);

  if (!user.userId) return <Redirect to="/login" />;

  return (
    <div
      className="p-2 flex flex-col justify-center
      items-center bg-purple-100 mx-auto border-2
      border-solid border-black rounded-lg w-11/12 sm:w-2/4 md:w-8/12"
    >
      <ToastContainer />
      <Header />
      <AddTodo />
      <SortBarTodos />
      <ListTodos />
    </div>
  );
}

export default Todos;
