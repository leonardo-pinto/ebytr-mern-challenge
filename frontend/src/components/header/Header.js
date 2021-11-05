/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Redirect } from 'react-router-dom';
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
    <header className="flex-col">
      <div className="flex justify-between items-center my-1">
        { user && <p data-testid="username-text">
          {`Hello, ${user.name}`}
        </p>}
        <span className="flex justify-center items-center">
          <p>Sign Out</p>
          <button
            className="m-1"
            type="button"
            data-testid="signout-btn"
            onClick={ () => handleSignOut() }
          >
            {signOutIcon()}
          </button>
        </span>
      </div>
    </header>
  );
}

export default Header;
