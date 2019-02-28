import React, { Component } from 'react';
import SearchResults from './SearchResults/SearchResults';

class SearchResultsContainer extends Component {
    render() {
        return (
            <div class="SearchResultsContainer">
                <SearchResults />
            </div>
        );
    }
}

export default SearchResultsContainer;