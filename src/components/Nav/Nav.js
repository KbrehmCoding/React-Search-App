import React, { Component, HashRouter } from 'react';
import { Navbar, NavLink } from 'react-materialize';

class Nav extends Component {
    render() {
        return (
            <HashRouter>
                <Navbar brand='Google Books' right>
                    <NavLink to='/Search'>Search</NavLink>
                    <NavLink to='/Saved'>Saved</NavLink>
                </Navbar>
            </HashRouter>
        );
    }
}

export default Nav;