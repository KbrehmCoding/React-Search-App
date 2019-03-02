import React, { Component } from 'react';
// look at 3/28 class example to make sure search is hooked up to backend
class SearchInput extends Component {
    render() {
        return (
            <div class="SearchContainer">
                <h6>Book Search</h6>
                <label>Book</label>
                <input id="search" placeholder="Search"/>
                <button>Search</button>
            </div>
        );
    }
}

export default SearchInput;