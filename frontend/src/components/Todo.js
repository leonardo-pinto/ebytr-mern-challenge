import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  const { todo: { todo, status, createdAt } } = props;
  console.log(typeof createdAt);
  return (
    <div>
      <p>{todo}</p>
      <p>{`Status: ${status}`}</p>
      <p>{`Created at: ${createdAt}`}</p>
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
