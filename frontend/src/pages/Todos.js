import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import AddTodo from '../components/todos/AddTodo';
import SortBarTodos from '../components/todos/SortBarTodos';
import ListTodos from '../components/todos/ListTodos';
import Title from '../components/title/Title';
import Header from '../components/header/Header';

function Todos() {
  const user = useSelector((state) => state.user);

  if (!user.userId) return <Redirect to="/login" />;

  return (
    <>
      <Header />
      <Title />
      <div
        className="p-2 flex flex-col justify-center
          items-center bg-green-400 mx-auto border-2
          border-solid border-black rounded-lg w-3/4 sm:w-1/2"
      >
        <ToastContainer />
        <AddTodo />
        <SortBarTodos />
        <ListTodos />
      </div>
    </>

  );
}

export default Todos;
