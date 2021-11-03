import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserProvider from './context/UserProvider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todos from './pages/Todos';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route path="/" component={ Todos } />
      </Switch>
    </UserProvider>
  );
}

export default App;
