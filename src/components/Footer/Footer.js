import React, { Component } from 'react';
import { Footer } from 'react-materialize';

class Footer extends Component {
    render() {
        return (
            <Footer className="Footer" right fixed>
                <ul>
                    <li className="li">@Copyright 2019</li>
                </ul>
            </Footer>
        );
    }
}

export default Footer;