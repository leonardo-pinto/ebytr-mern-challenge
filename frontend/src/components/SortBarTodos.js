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
    <div>
      <label htmlFor="select-sort">
        <p>Sort by:</p>
        <select
          id="select-sort"
          name="parameter"
          onChange={ handleSortParameter }
        >
          <option value="todo">Todo</option>
          <option value="status">Status</option>
          <option value="createdAt">Date</option>
        </select>
      </label>
      <button
        data-testid="sort-asc-btn"
        type="button"
        onClick={ () => handleSortOrder('asc') }
      >
        {SortAscIcon()}
      </button>
      <button
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
