import React, { Component } from "react";
import { Router, HashRouter } from "react-Router-dom";
import { Card, CardContent } from "react-materialize";
import book from "../../../models/book";


class SavedBooks extends Component {
    render() {
        return (
            <HashRouter>
                <div class="SavedBooks">
                    <Card className="small">
                        <CardContent>
                            <div>
                                {/* Need to look into how to correctly call the books api to this card */}
                                <Router path=".../models/index">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <h1>
                                                    {this.state.book.title} by {this.state.book.author}
                                                </h1>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>
                                                    {this.state.book.image}
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p>
                                                    {this.state.book.synopsis}
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Router>
                            </div>
                            <button>Veiw</button>
                            <button>Delete</button>
                        </CardContent>
                    </Card>
                </div>
            </HashRouter>
        );
    }
}

export default SavedBooks;