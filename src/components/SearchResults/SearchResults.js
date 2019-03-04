import React, { Component } from 'react';
import { Card, CardContent } from 'react-materialize';
import book from ".../models/book"

class SearchResults extends Component {
    render() {
        return (
            <div class="SearchResults">
                <Card className='small'>Card Title
                    <CardContent>
                    {/* figure out the correct way to call this */}
                        {book.title}
                        {book.subtitle}
                        {book.authors}
                        {book.image} {book.description}
                        <button>Save</button>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default SearchResults;