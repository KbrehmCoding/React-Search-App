import React, { Component } from 'react';
import { Input } from 'react-materialize';

var Style = {
    margin: '20px',
    width: '97%'
};

var Form = {
    borderRadius: '10px',
    borderStyle: 'groove',
    margin: '20px',
}

class SearchInput extends Component {
    state = {
        query: '',
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
    }

    render() {
        return (
            <form style={Form}>
                <Input placeholder="Search" s={12} label="Book Search" ref={input => this.search = input}
                    onChange={this.handleInputChange} style={Style}/>
            </form>
        );
    }
}

export default SearchInput;