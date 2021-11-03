import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todosActions';
import { AddIcon } from '../services/todosIcons';

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
    <div>
      <label htmlFor="todo">
        <input
          name="todo"
          type="text"
          placeholder="Add todo..."
          data-testid="todo-input"
          value={ todo }
          onChange={ (e) => setTodo(e.target.value) }
        />
      </label>
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
