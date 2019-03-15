import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Saved from './components/Saved';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/search" component={ Search } />
          <Route path="/saved" component={ Saved } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    );
  }
}

export default App;
