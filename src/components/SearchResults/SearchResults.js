import React, { Component } from 'react';
import { Card, CardContent } from 'react-materialize';
import book from ".../models/book"

class SearchResults extends Component {
    render() {
        return (
            <div class="SearchResults">
                <Card className='small'>Card Title
                    <CardContent>
                        {book}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default SearchResults;