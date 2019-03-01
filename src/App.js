import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer/Footer';
import Jumbo from './components/Jumbo/Jumbo';
import Nav from './components/Nav/Nav';
import Search from './components/Search/Search';
import SearchResultsContainer from './components/SearchResultsContainer';
import SavedContainer from './components/SavedContainer/SavedContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbo />
        <route path="/" Component{ Search, SearchResults, SearchResultsContainer }/>
        <route path="/Saved" Component{ SavedBooks, SavedContainer }/>
        <Footer />
      </div>
    );
  }
}

export default App;
