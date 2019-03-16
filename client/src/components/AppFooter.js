import React, { Component } from 'react';
import { Footer } from 'react-materialize';

var Style = {
  backgroundColor: '#4FA954',
  color: 'white'
};

class AppFooter extends Component {
  render() {
    return (
        <Footer style={Style}>
          Copyright © 2019
        </Footer>
    );
  }
}

export default AppFooter;
