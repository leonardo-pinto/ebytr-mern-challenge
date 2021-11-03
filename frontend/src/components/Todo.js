import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { DeleteIcon } from '../services/todosIcons';
import { deleteTodo } from '../redux/actions/todosActions';

function Todo(props) {
  const { todo: { todo, status, createdAt, _id } } = props;
  const dispatch = useDispatch();

  const handleDeleteTodoClick = () => {
    dispatch(deleteTodo(_id));
  };

  return (
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
