import React from 'react';
import { todoIcon } from '../../services/todosIcons';

function Title() {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      {todoIcon()}
      <h1
        className="font-medium text-2xl sm:text-3xl md:text-4xl p-1"
      >
        Ebytr To Do List
      </h1>
      <p
        className="text-center italic p-1 sm:text-lg md:text-xl"
      >
        A time management system perfect for you
      </p>
    </div>
  );
}

export default Title;
