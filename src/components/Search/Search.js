import React, { Component } from 'react';

class SearchInput extends Component {
    render() {
        return (
            <div class="SearchContainer">
                <input id="search" placeholder="Search"/>
                <i class="material-icons">search</i>
            </div>
        );
    }
}

export default SearchInput;