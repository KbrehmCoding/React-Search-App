import React, { Component } from 'react';
import { Card, CardContent } from 'react-materialize';
import book from ".../models/book"

class SavedBooks extends Component {
    render() {
        return (
            <div class="SavedBooks">
                <Card className='small'>
                    <CardContent>
                        {book.title}
                        {book.subtitle}
                        {book.authors}
                        {book.image} {book.description}
                        <button>Veiw</button>
                        <button>Delete</button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default SavedBooks;