import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';


var NavBarStyle = {
  backgroundColor: '#4285F4',
};

class Nav extends Component {
  render() {
    return (
      <Navbar brand="Google Books" right style={NavBarStyle}>
        <NavItem href="/search">Search</NavItem>
        <NavItem href="/saved">Saved</NavItem>
      </Navbar>
    );
  }
}

export default Nav;
