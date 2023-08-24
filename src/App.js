import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Đảm bảo import đúng đường dẫn của các component
import Home from './pages/Home/Home'; // Đảm bảo import đúng đường dẫn của các component
import Profile from './pages/Profile/Profile';
import { createBrowserHistory } from 'history'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import './App.css'
import Login from './pages/Login/Login';
export const history = createBrowserHistory()

function App () {
  return (
    <Router history={history}>
      <Switch>
        <UserTemplate path="/profile" exact Component={Profile} />
        <UserTemplate path="/home" exact Component={Home} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;