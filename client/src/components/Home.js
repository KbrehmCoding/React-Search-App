import React, { Component } from 'react';

import AppFooter from './AppFooter';
import Jumbotron from './Jumbotron';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <Jumbotron />
        <AppFooter />
      </>
    );
  }
}

export default Home;
