import React, { Component } from 'react';
import AppFooter from './AppFooter';
import Jumbotron from './Jumbotron';
import Nav from './Nav';
import SearchCard from './SearchCard';
import SearchInput from './SearchInput';

class Search extends Component {
  render() {
    return (
      <>
        <Nav />
        <Jumbotron />
        <SearchInput/>
        <SearchCard/>
        <AppFooter />
      </>
    );
  }
}

export default Search;
