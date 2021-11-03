import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todosActions';

function AddTodo({ todo, setTodo }) {
  const dispatch = useDispatch();

  const handleAddTodoClick = () => {
    dispatch(addTodo(todo));
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
        Add Todo!
      </button>
    </div>
  );
}

export default AddTodo;

AddTodo.propTypes = {
  todo: PropTypes.string.isRequired,
  setTodo: PropTypes.func.isRequired,
};
