import React, { Component } from 'react';
import { Input } from 'react-materialize';


class SearchInput extends Component {
    render() {
        return (
            <>
                <Input placeholder="Search" s={12} label="Book Search" />
            </>
        );
    }
}

export default SearchInput;