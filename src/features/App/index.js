import React, { Component } from 'react';

import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LoginClass from "../Login/LoginClass";
import LoginHook from "../Login/LoginHook";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/class">Class</Link></li>
            <li><Link to="/hook">Hooks</Link></li>
          </ul>
          <div>
            <Route exact path="/class" component={LoginClass} />
            <Route exact path="/hook" component={LoginHook} />
          </div>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
