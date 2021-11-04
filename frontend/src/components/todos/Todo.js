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
            className="flex flex-col justify-center
            items-start bg-purple-100 mx-auto border-2
            border-solid border-black rounded-lg w-full"
          >
            <p className="p-1" data-testid="todo-text">
              {`Task: ${todo}`}
            </p>
            <p className="p-1" data-testid="todo-status">
              {`Status: ${status}`}
            </p>
            <p className="p-1" data-testid="todo-createdat">
              {`Created at: ${createdAt}`}
            </p>
            <div>
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
            items-start bg-purple-100 mx-auto border-2
            border-solid border-black rounded-lg p-4"
          >
            <div className="flex justify-start items-center">
              <p className="p-1">Task:</p>
              <input
                data-testid="edit-todo-text-input"
                className="py-2 px-3 m-2 rounded
                focus:ring-2 focus:ring-blue-600 text-gray-700"
                type="text"
                name="todo"
                value={ editedTodo.todo }
                onChange={ handleEditedTodo }
              />
            </div>
            <div className="flex justify-start items-center">
              <p className="p-1">Status:</p>
              <select
                data-testid="edit-status-select"
                name="status"
                className="bg-white rounded-lg py-2 px-3 m-2 border
                border-transparent focus:ring-2 focus:ring-blue-600"
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
