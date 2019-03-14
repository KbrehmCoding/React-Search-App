import React, { Component } from 'react';
import SavedBooks from '../SavedBooks/SavedBooks';

class SavedContainer extends Component {
    render() {
        return (
            <div class="SavedContainer">
                <h6>Saved Books</h6>
                <SavedBooks />
            </div>
        );
    }
}

export default SavedContainer;