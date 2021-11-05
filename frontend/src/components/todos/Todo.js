import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  DeleteIcon,
  EditIcon,
  ConfirmEditIcon,
  CancelEditIcon,
} from '../../services/todosIcons';
import { deleteTodo, updateTodo } from '../../redux/actions/todosActions';

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
          <div
            className="flex justify-center
            items-start bg-green-200 mx-auto my-4 border-2
            border-black rounded-lg w-full"
          >
            <div>
              <p className="px-1 py-2" data-testid="todo-text">
                {`Task: ${todo}`}
              </p>
              <p className="px-1 py-2" data-testid="todo-status">
                {`Status: ${status}`}
              </p>
              <p className="text-sm px-1 py-2" data-testid="todo-createdat">
                {`Created at: ${createdAt}`}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center m-4">
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
          </div>
        )
        : (
          <div
            className="flex flex-col justify-center
            items-center bg-green-200 mx-auto my-4 border-2
            border-black rounded-lg w-full"
          >
            <div className="flex justify-center items-center">
              <p className="px-1 py-2">Task:</p>
              <input
                data-testid="edit-todo-text-input"
                className="w-3/4 py-1 px-2 m-0 sm:m-2 rounded
                focus:ring-2 focus:ring-black text-black"
                type="text"
                name="todo"
                value={ editedTodo.todo }
                onChange={ handleEditedTodo }
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="px-1 py-2">Status:</p>
              <select
                data-testid="edit-status-select"
                name="status"
                className="bg-white rounded p-1 m-0 sm:m-2 border
                focus:ring-2 focus:ring-black"
                onChange={ handleEditedTodo }
              >
                <option value="Pending">Pending</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
              </select>
              <button
                className="m-4"
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
