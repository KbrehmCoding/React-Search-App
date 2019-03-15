import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class Nav extends Component {
  render() {
    return (
      <Navbar brand="Google Books" right>
        <NavItem href="/search">Search</NavItem>
        <NavItem href="/saved">Saved</NavItem>
      </Navbar>
    );
  }
}

export default Nav;
