import React, { Component } from 'react';
import { Card, CardContent } from 'react-materialize';
import { Router, HashRouter} from "react-Router-dom";
import book from '../../../models/book'

class SearchResults extends Component {
    render() {
        return (
            <HashRouter>
                <div class="SearchResults">
                    <Card className='small'>Card Title
                    <CardContent>
                            {/* figure out the correct way to call this */}
                            <Router>
                                {book}
                            </Router>
                            <button>Save</button>
                        </CardContent>
                    </Card>
                </div>
            </HashRouter>
        );
    }
}

export default SearchResults;