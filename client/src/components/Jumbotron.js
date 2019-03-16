import React, { Component } from 'react';

var JumbotronStyle = {
  backgroundColor: '#EA4535',
  borderRadius: '10px',
  color: 'white',
  margin: '20px',
  padding: '20px',
  textAlign: 'center'
};

class Jumbotron extends Component {
  render() {
    return (
      <div style={JumbotronStyle}>
        <h1>(React)Google Book Search</h1>
        <h5>Search For and Save Books Of Interest</h5>
      </div>
    );
  }
}

export default Jumbotron;
