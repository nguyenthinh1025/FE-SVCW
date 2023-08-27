import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Đảm bảo import đúng đường dẫn của các component
import Home from './pages/Home/Home'; // Đảm bảo import đúng đường dẫn của các component
import Profile from './pages/Profile/Profile';
import { createBrowserHistory } from 'history'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import './App.css'
import Login from './pages/Login/Login';
import DetailActivity from './components/DetailActivity';
import DetailFanpage from './pages/Fanpage/DetailFanpage';
import CreateFanpage from './pages/Fanpage/CreateFanpage';
import Result from './pages/Result/Result';
import StatisticalUser from './pages/StatisticalUser/StatisticalUser';
import Group from './pages/Groups/Group';
import ABC from './pages/Groups/group1';
import SendEmailComponent from './SendEmailComponent';
export const history = createBrowserHistory()

function App () {
  return (
    <Router history={history}>
      <Switch>
        <UserTemplate path="/profile/:id" exact Component={Profile} />
        <UserTemplate path="/home" exact Component={Home} />
        <Route path="/detailactivity/:id" exact component={DetailActivity} />
        <UserTemplate exact path="/fanpage/:id" Component={DetailFanpage} />
        <UserTemplate exact path="/createfanpage" Component={CreateFanpage} />
        <UserTemplate exact path="/history" Component={Result} />
        <UserTemplate exact path="/statisticaluser" Component={StatisticalUser} />
        <UserTemplate exact path="/groups" Component={Group} />
        <UserTemplate exact path="/send" Component={SendEmailComponent} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;