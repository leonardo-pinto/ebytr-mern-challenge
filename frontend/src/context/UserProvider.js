import React from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';
import { retrieveUserDataFromToken } from '../services/todosServices';

function UserProvider({ children }) {
  const userData = retrieveUserDataFromToken();

  return (
    <userContext.Provider
      value={ { userData } }
    >
      { children }
    </userContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
