import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  const { todo: { todo, status, createdAt } } = props;

  return (
    <div>
      <p>{todo}</p>
      <p>{status}</p>
      <p>{createdAt}</p>
    </div>
  );
}

export default Todo;

Todo.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
