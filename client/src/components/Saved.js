import React, { Component } from 'react';
import AppFooter from './AppFooter';
import Jumbotron from './Jumbotron';
import Nav from './Nav';
import SavedCard from './SavedCard';

class Saved extends Component {
  render() {
    return (
      <>
        <Nav />
        <Jumbotron />
        <SavedCard />
        <AppFooter />
      </>
    );
  }
}

export default Saved;
