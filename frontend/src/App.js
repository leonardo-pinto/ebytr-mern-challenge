import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Todos from './pages/Todos';

function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/" component={ Todos } />
    </Switch>
  );
}

export default App;
