import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
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
    <div className="h-screen heropattern-wiggle-gray-300 bg-repeat">
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route path="/" component={ Todos } />
      </Switch>
    </div>
  );
}

export default App;
