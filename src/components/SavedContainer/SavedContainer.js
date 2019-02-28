import React, { Component } from 'react';
import SavedBooks from './SavedBooks/SavedBooks';

class SavedContainer extends Component {
    render() {
        return (
            <div class="SavedContainer">
                <SavedBooks />
            </div>
        );
    }
}

export default SavedContainer;