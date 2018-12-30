import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import Movie from "./Movie";

class Show extends Component {

    state = {movies: [], pageNumber: 1, itemsPerPage: 5};

    getMovies(pageNumber) {
        return fetch(`http://localhost:2001/getMoviesByPage/${this.state.itemsPerPage}/${pageNumber}`)
            .then(response => response.json())
    }

    componentWillMount() {
        this.getMovies(this.state.pageNumber).then((data) => {
            this.setState({movies: data})
        })
    }

    loadNext() {
        let newPageNumber = this.state.pageNumber + 1;
        const __this = this;
        this.getMovies(newPageNumber).then((data) => {
            if (data.length > 0) {
                __this.setState({movies: data, pageNumber: newPageNumber});
            }
        })
    }

    loadPrevious() {
        let newPageNumber = this.state.pageNumber - 1;
        const __this = this;
        this.getMovies(newPageNumber, this.state.itemsPerPage).then((data) => {
            __this.setState({movies: data, pageNumber: newPageNumber});
        })
    }

    render() {
        return (
            <div>
                <Row>
                    {this.state.movies.map((element, i) => <Col xs="1" key={i}><Movie data={element}/></Col>)}
                </Row>
                <Row>
                    <Col xs="auto">
                        {this.state.pageNumber > 1 &&
                        <Button color="danger" onClick={this.loadPrevious.bind(this)}>Load Previous</Button>}
                    </Col>
                    <Col xs="auto">
                        <Button color="primary" onClick={this.loadNext.bind(this)}>Load Next</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Show