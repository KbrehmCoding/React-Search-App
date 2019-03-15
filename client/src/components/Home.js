import React, { Component} from 'react';
import AppFooter from './AppFooter';
import Jumbotron from './Jumbotron';
import Nav from './Nav';
import SearchInput from './SearchInput';

class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <Jumbotron />
        <SearchInput/>
        {/* <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/search" component={ Search } />
          <Route path="/saved" component={ Saved } />
          <Route component={ NotFound } />
        </Switch>
      </Router> */}
        <AppFooter />
      </>
    );
  }
}

export default Home;
