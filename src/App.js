import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Đảm bảo import đúng đường dẫn của các component
import Home from './pages/Home/Home'; // Đảm bảo import đúng đường dẫn của các component
import Profile from './pages/Profile/Profile';
import { createBrowserHistory } from 'history'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import './App.css'
import Login from './pages/Login/Login';
import DetailActivity from './components/DetailActivity';
import ProcessType from './pages/ProcessType/ProcessType';
import ReportType from './pages/ReportType/ReportType';
import DetailFanpage from './pages/Fanpage/DetailFanpage';
import CreateFanpage from './pages/Fanpage/CreateFanpage';
import Result from './pages/Result/Result';
import StatisticalUser from './pages/StatisticalUser/StatisticalUser';
import Group from './pages/Groups/Group';
import DynamicForm from './Test';
import DetailProcess from './pages/DetailProcess/DetailProcess';
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import Achivement from './pages/Achivement/Achivement';
import Role from './pages/Role/Role';
import Moderator from './pages/Moderator/Moderator';
import AdminFanpage from './pages/AdminFanpage/AdminFanpage';
import AdminActivity from './pages/AdminActivity/AdminActivity';
import Report from './pages/Report/Report';
export const history = createBrowserHistory()

function App () {
  return (
    <Router history={history}>
      <Switch>
        <AdminTemplate exact path="/achivement" Component={Achivement} />
        <AdminTemplate exact path="/processtype" Component={ProcessType} />
        <AdminTemplate exact path="/reporttype" Component={ReportType} />
        <AdminTemplate exact path="/role" Component={Role} />
        <AdminTemplate exact path="/moderator" Component={Moderator} />
        <AdminTemplate exact path="/adminfanpage" Component={AdminFanpage} />
        <AdminTemplate exact path="/adminactivity" Component={AdminActivity} />
        <AdminTemplate exact path="/report" Component={Report} />


        <UserTemplate path="/profile/:id" exact Component={Profile} />
        <UserTemplate path="/home" exact Component={Home} />
        <Route path="/detailactivity/:id" exact component={DetailActivity} />
        <UserTemplate exact path="/fanpage/:id" Component={DetailFanpage} />
        <UserTemplate exact path="/createfanpage" Component={CreateFanpage} />
        <UserTemplate exact path="/history" Component={Result} />
        <UserTemplate exact path="/statisticaluser" Component={StatisticalUser} />
        <UserTemplate exact path="/groups" Component={Group} />
        <UserTemplate exact path="/test" Component={DynamicForm} />
        <UserTemplate exact path="/detailprocess/:id" Component={DetailProcess} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;