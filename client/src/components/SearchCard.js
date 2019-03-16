import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

var Style = {
    backgroundColor: '#F8BD32',
    borderRadius: '10px',
    margin: '20px'
};

class SearchCard extends Component {
    render() {
        return (
            <>
                <Col m={6} s={12}>
                    <Card style={Style} textClassName='white-text' title='Card title' actions={<button>Save</button>}>
                        I am a very simple card.
                    </Card>
                </Col>
            </>
        );
    }
}

export default SearchCard;

