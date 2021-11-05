/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/userActions';
import { signOutIcon } from '../../services/todosIcons';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  if (!user.userId) return <Redirect to="/login" />;

  return (
    <header className="flex justify-between items-center bg-green-400 px-4 py-2">
      <p
        data-testid="username-text"
        className="text-white font-medium sm:text-xl md:text-2xl"
      >
        {`Hello, ${user.name}`}
      </p>
      <Link to="/login" className="flex justify-center items-center">
        <p
          className="text-white mx-2 font-medium hover:undeline sm:text-xl md:text-2xl"
        >
          Sign Out
        </p>
        <button
          type="button"
          data-testid="signout-btn"
          onClick={ () => handleSignOut() }
        >
          {signOutIcon()}
        </button>
      </Link>
    </header>
  );
}

export default Header;
