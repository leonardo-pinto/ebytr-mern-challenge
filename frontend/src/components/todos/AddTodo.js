import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions/todosActions';
import { AddIcon } from '../../services/todosIcons';

function AddTodo() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodoClick = () => {
    if (todo !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  return (
    <div
      className="flex justify-center items-center m-2 p-2"
    >
      <input
        name="todo"
        className="w-3/4 py-0.5 sm:py-2 px-3 m-1 sm:m-2 rounded
          focus:ring-2 focus:ring-black text-black"
        type="text"
        placeholder="Add todo..."
        data-testid="todo-input"
        value={ todo }
        onChange={ (e) => setTodo(e.target.value) }
      />
      <button
        type="button"
        data-testid="add-todo-btn"
        onClick={ () => handleAddTodoClick() }
      >
        {AddIcon()}
      </button>
    </div>
  );
}

export default AddTodo;
