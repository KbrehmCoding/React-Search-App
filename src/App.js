import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Jumbo from './components/Jumbo/Jumbo';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import SearchContainer from './components/SearchResultsContainer';
import SavedContainer from './components/SavedContainer/SavedContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbo />
        <Search />

        <Footer />
      </div>
    );
  }
}

export default App;
