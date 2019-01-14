import React from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label, Row,} from 'reactstrap';
import './App.css';

export default {
    addRemoveMovie: function Form() {
        return (
            <Container className="form-wrapper">
                <h2>Add or Remove Movie</h2>
                <Form>
                    <Col>
                        <FormGroup>
                            <Label>Movie Title</Label>
                            <Input
                                type="text"
                                id="movieTitle"
                                placeholder="e.g. Lara Croft: Tomb Raider – The Cradle of Life"
                                onChange={this.inputHandler.bind(this)}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Movie Release Date</Label>
                            <Input
                                type="text"
                                id="movieDate"
                                placeholder="e.g. 2017-07-21"
                                pattern="\d*"
                                required
                                onChange={this.inputHandler.bind(this)}
                            />
                        </FormGroup>
                    </Col>
                    <Row>
                        <Col sm={{size: 'auto'}}><Button className="btn btn-danger" id="add"
                                                         onClick={this.addOrDeleteMovie.bind(this)}>
                            Add Movie to DB</Button></Col>
                        <Col sm={{size: 'auto'}}><Button id="delete" onClick={this.addOrDeleteMovie.bind(this)}>
                            Delete Movie from DB</Button></Col>
                        <Col sm={{size: 'auto'}}><Button onClick={this.addRandomMovie.bind(this)}>
                            Add one random movie</Button></Col>
                    </Row>
                </Form>
            </Container>
        );
    },
    movieList: function () {
        return (
            <Container className="form-wrapper">

            </Container>
        )
    }
}
