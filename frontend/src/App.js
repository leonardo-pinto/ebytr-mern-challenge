import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { loadUser } from './redux/actions/userActions';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todos from './pages/Todos';
import Title from './components/title/Title';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="h-screen heropattern-formalinvitation-red-100">
      <Title />
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route path="/" component={ Todos } />
      </Switch>
    </div>
  );
}

export default App;
