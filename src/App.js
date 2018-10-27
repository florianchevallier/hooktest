import React, { Component } from 'react';

import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UsingClass from "./UsingClass";
import UsingHook from "./UsingHook";

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
            <Route exact path="/class" component={UsingClass} />
            <Route exact path="/hook" component={UsingHook} />
          </div>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
