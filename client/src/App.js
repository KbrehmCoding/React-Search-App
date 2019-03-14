import React, { Component } from "react";
import { Route, Router, Switch } from "react-Router-dom";
import BookFooter from "./components/Footer/Footer";
import Jumbo from "./components/Jumbo/Jumbo";
import Nav from "./components/Nav/Nav";
import SearchInput from "./components/Search/Search";
import SearchResults from "./components/SearchResults/SearchResults";
import SearchResultsContainer from "../components/SearchResultsContainer";
import SavedBooks from "./components/SavedBooks/SavedBooks";
import SavedContainer from "./components/SavedContainer/SavedContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Jumbo />
          <Switch>
            <Route path="/Search" Component={ SearchInput } />
            <Route path="/Search" Component={ SearchResults } />
            <Route path="/Search" Component={ SearchResultsContainer } />
            <Route path="/Saved" Component={ SavedBooks } />
            <Route path="/Saved" Component={ SavedContainer } />
          </Switch>
          <BookFooter />
        </div>
      </Router>
    );
  }
}

export default App;
