import React, { Component } from 'react';
import routes from '../../../routes/api/google';

class SearchInput extends Component {
    state = {
        query: '',
        results: []
    }
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }
    // TODO find way to use the routes export to connect search inpit to this input
    render() {
        return (
            <div class="SearchContainer">
                <h6>Book Search</h6>
                <form>
                    <label>Book</label>
                    <input id="search" placeholder="Search" type="text" ref={input => this.search = input}
                        onChange={this.handleInputChange} />
                </form>
                <button>Search</button>
            </div>
        );
    }
}

export default SearchInput;