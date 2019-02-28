import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class Nav extends Component {
    render() {
        return (
            <Navbar brand='Google Books' right>
                <NavItem>Search</NavItem>
                <NavItem href=''>Saved</NavItem>
            </Navbar>
        );
    }
}

export default Nav;