import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SortAscIcon,
  SortDesIcon,
} from '../services/todosIcons';
import { sortTodos } from '../redux/actions/todosActions';

function SortBarTodos() {
  const dispatch = useDispatch();
  const [sortParameter, setSortParameter] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortParameter = ({ target: { value } }) => {
    setSortParameter(value);
    dispatch(sortTodos(value, sortOrder));
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
    dispatch(sortTodos(sortParameter, order));
  };

  return (
    <div className="flex p-2 justify-center items-center">
      <p>Sort by:</p>
      <select
        className="bg-white rounded-lg p-1 m-4 border
        border-transparent focus:ring-2 focus:ring-blue-600"
        name="parameter"
        onChange={ handleSortParameter }
      >
        <option value="todo">Todo</option>
        <option value="status">Status</option>
        <option value="createdAt">Date</option>
      </select>

      <button
        className="m-2"
        data-testid="sort-asc-btn"
        type="button"
        onClick={ () => handleSortOrder('asc') }
      >
        {SortAscIcon()}
      </button>
      <button
        className="m-2"
        data-testid="sort-des-btn"
        type="button"
        onClick={ () => handleSortOrder('des') }
      >
        {SortDesIcon()}
      </button>
    </div>
  );
}

export default SortBarTodos;
