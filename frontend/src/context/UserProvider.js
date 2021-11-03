import React, { useState } from 'react';
import PropTypes from 'prop-types';
import userContext from './userContext';
import { retrieveUserDataFromToken } from '../services/todosServices';

function UserProvider({ children }) {
  const [userData, setUserData] = useState(retrieveUserDataFromToken());

  return (
    <userContext.Provider
      value={ { userData, setUserData } }
    >
      { children }
    </userContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
