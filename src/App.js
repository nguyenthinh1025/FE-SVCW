import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Profile/Profile'; // Đảm bảo import đúng đường dẫn của các component
import Home from './Home/Home'; // Đảm bảo import đúng đường dẫn của các component

function App () {
  return (
    <Router>
      <Switch>
        <Route path="/profile" exact component={Profile} /> {/* Chữ "Component" thay bằng "component" */}
        <Route path="/" exact component={Home} /> {/* Chữ "Component" thay bằng "component" */}
      </Switch>
    </Router>
  );
}

export default App;