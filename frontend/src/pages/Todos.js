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
        className="py-0.5 px-1 sm:p-2 flex flex-col justify-center items-center
          bg-green-400 heropattern-charliebrown-gray-200 mx-auto my-2 border-2
          border-solid border-black rounded-lg w-11/12 sm:w-1/2 md:w-2/5"
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
