import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { render } from '@testing-library/react';

import rootReducer from '../redux/reducers/rootReducer';

// Arthur Hermann Campos helped me to implement this function
// https://github.com/tryber/sd-011-project-recipes-app/pull/215

export const getStore = (initialState) => {
  if (!initialState) return createStore(rootReducer, applyMiddleware(thunk));

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export const renderWithRouterAndRedux = (component, routeConfigs = {}, initialState) => {
  const route = routeConfigs.route || '/';
  const store = getStore(initialState);
  const history = routeConfigs.history
  || createMemoryHistory({ initialEntries: [route] });

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ history }>{component}</Router>
      </Provider>,
    ),
    history,
    store,
  };
};
