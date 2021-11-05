import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  SortAscIcon,
  SortDesIcon,
} from '../../services/todosIcons';
import { sortTodos } from '../../redux/actions/todosActions';

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
    <div className="flex justify-center p-2 justify-center items-center">
      <p className="text-white text-lg sm:text-xl">Sort by:</p>
      <select
        data-testid="select-parameter"
        className="bg-white rounded p-1 m-2 sm:m-4 border
        focus:ring-2 focus:ring-black"
        name="parameter"
        onChange={ handleSortParameter }
      >
        <option value="todo">Todo</option>
        <option value="status">Status</option>
        <option data-testid="created-at-option" value="createdAt">Date</option>
      </select>
      <button
        className="m-1 sm:m-2"
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
