import React, { Component } from 'react';
import { Card, CardContent } from 'react-materialize';
import book from ".../models/book"

class SavedBooks extends Component {
    render() {
        return (
            <div class="SavedBooks">
                <Card className='small'>
                    <CardContent>
                        {book}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default SavedBooks;