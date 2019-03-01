import React, { Component } from 'react';
import SearchResults from './SearchResults/SearchResults';

class SearchResultsContainer extends Component {
    render() {
        return (
            <div class="SearchResultsContainer">
                <h6>Results</h6>
                <SearchResults />
            </div>
        );
    }
}

export default SearchResultsContainer;