import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/userActions';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todos from './pages/Todos';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center h-screen bg-purple-200">
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route path="/" component={ Todos } />
      </Switch>
    </div>
  );
}

export default App;
