/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import { retrieveUserNameFromToken } from '../services/todosServices';

function Header() {
  const [userLogged, setUserLogged] = useState('');

  console.log('userLogged', userLogged);
  useEffect(() => {
    setUserLogged(retrieveUserNameFromToken());
  }, []);

  return (
    <header>
      <h1>App name</h1>
      { userLogged && <p>
        {`Hello, ${userLogged}`}
      </p>}
      <span>
        <p>Sign Out</p>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={ 2 }
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0
            01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
      </span>
    </header>
  );
}

export default Header;
