import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  DeleteIcon,
  EditIcon,
  ConfirmEditIcon,
  CancelEditIcon,
} from '../services/todosIcons';
import { deleteTodo, updateTodo } from '../redux/actions/todosActions';

function Todo(props) {
  const { todo: { todo, status, createdAt, _id } } = props;
  const dispatch = useDispatch();
  const [editTodoEnabled, setEditTodoEnabled] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    todo,
    status,
  });

  const handleDeleteTodoClick = () => {
    dispatch(deleteTodo(_id));
  };

  const handleEditTodoEnabled = () => {
    setEditTodoEnabled(!editTodoEnabled);
  };

  const handleEditedTodo = ({ target: { name, value } }) => {
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
  };

  const handleConfirmEditButtonClick = () => {
    const updatedTodo = {
      _id,
      todo: editedTodo.todo,
      status: editedTodo.status,
      createdAt,
    };
    dispatch(updateTodo(updatedTodo));
    handleEditTodoEnabled();
  };

  return (
    <div>
      { !editTodoEnabled
        ? (
          <div>
            <p data-testid="todo-text">{todo}</p>
            <p data-testid="todo-status">{`Status: ${status}`}</p>
            <p data-testid="todo-createdat">{`Created at: ${createdAt}`}</p>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => handleDeleteTodoClick() }
            >
              {DeleteIcon()}
            </button>
            <button
              type="button"
              data-testid="edit-btn"
              onClick={ () => handleEditTodoEnabled() }
            >
              {EditIcon()}
            </button>
          </div>
        )
        : (
          <div>
            <label htmlFor="editTodoText">
              <input
                data-testid="edit-todo-text-input"
                type="text"
                name="todo"
                value={ editedTodo.todo }
                onChange={ handleEditedTodo }
              />
            </label>
            <label htmlFor="status-select">
              <select
                name="status"
                onChange={ handleEditedTodo }
              >
                <option value="Pending">Pending</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
              </select>
            </label>
            <button
              data-testid="confirm-edit-todo-btn"
              type="button"
              onClick={ () => handleConfirmEditButtonClick() }
            >
              {ConfirmEditIcon()}
            </button>
            <button
              data-testid="cancel-edit-todo-btn"
              type="button"
              onClick={ () => handleEditTodoEnabled() }
            >
              {CancelEditIcon()}
            </button>
          </div>
        )}
    </div>
  );
}

export default Todo;

Todo.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string,
    todo: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
