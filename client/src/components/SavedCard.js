import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

var Style = {
    backgroundColor: '#F8BD32',
    borderRadius: '10px',
    margin: '20px'
};

class SavedCard extends Component {
    render() {
        return (
            <>
                <Col m={6} s={12}>
                    <Card  textClassName='white-text' title='Card title' style={Style} actions={<button>Delete</button>}>
                        I am a very simple card.
                    </Card>
                </Col>
            </>
        );
    }
}

export default SavedCard;