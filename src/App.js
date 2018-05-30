import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './components/Create';
import Index from './components/Index';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() { 
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Axios App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/create'} className="nav-link">Create</Link></li>
                <li className="nav-item"><Link to={'/index'} className="nav-link">List</Link></li>
              </ul>
              <hr />
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/index' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
