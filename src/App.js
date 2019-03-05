import React, { Component } from 'react';
import { Route, HashRouter} from "react-Router-dom";
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
      <HashRouter>
        <div className="App">
          <Nav />
          <Jumbo />
          <div id="content">
            <Route path="/Search" Component={ SearchInput } />
            <Route path="/Search" Component={ SearchResults } />
            <Route path="/Search" Component={ SearchResultsContainer } />
            <Route path="/Saved" Component={ SavedBooks } />
            <Route path="/Saved" Component={ SavedContainer } />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
