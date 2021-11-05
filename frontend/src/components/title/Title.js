import React from 'react';
import { todoIcon } from '../../services/todosIcons';

function Title() {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      {todoIcon()}
      <h1 className="text-2xl p-1">Ebytr To Do List</h1>
      <p className="italic p-1">A time management system perfect for you</p>
    </div>
  );
}

export default Title;
