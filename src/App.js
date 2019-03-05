import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer/Footer';
import Jumbo from './components/Jumbo/Jumbo';
import Nav from './components/Nav/Nav';
import SearchInput from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import SearchResultsContainer from './components/SearchResultsContainer';
import SavedBooks from './components/SavedBooks/SavedBooks';
import SavedContainer from './components/SavedContainer/SavedContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbo />
        {/* Find out why this route doesnt like the way I am entering the components */}
        <route path="/Search" Component={ SearchInput } />
        <route path="/Search" Component={ SearchResults } />
        <route path="/Search" Component={ SearchResultsContainer } />
        <route path="/Saved" Component={ SavedBooks } />
        <route path="/Saved" Component={ SavedContainer } />

        <Footer />
      </div>
    );
  }
}

export default App;
