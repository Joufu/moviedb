import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import Movie from "./Movie";

class Show extends Component {

    state = {movies: [], pageNumber: 1, itemsPerPage: 5};

    getMovies(pageNumber, itemsPerPage) {
        return fetch(`http://localhost:2001/getMoviesByPage/${itemsPerPage}/${pageNumber}`)
            .then(response => response.json())
    }

    componentWillMount() {
        this.getMovies(this.state.pageNumber, this.state.itemsPerPage).then((data) => {
            this.setState({movies: data})
        })
    }

    // loadMore () {
    //     this.state.pageNumber +=1
    //     const __this = this;
    //     this.getAllItems(this.state.pageNumber, this.state.itemsPerPage).then((data)=>{
    //         __this.setState({recipes: [...__this.state.recipes, ...data]})
    //     })
    //
    // }


    loadNext() {
        let newPageNumber = this.state.pageNumber + 1;
        const __this = this;
        this.getMovies(newPageNumber, this.state.itemsPerPage).then((data) => {
            if (data.length > 0) {
                __this.setState({movies: [...data], pageNumber: newPageNumber});
            }
        })
    }

    loadPrevious() {
        let newPageNumber = this.state.pageNumber - 1;
        const __this = this;
        this.getMovies(newPageNumber, this.state.itemsPerPage).then((data) => {
            __this.setState({movies: [...data], pageNumber: newPageNumber});
        })
    }

    render() {
        return (
            <div>
                <Row>
                    {this.state.movies.map((element) => {
                        return (<Col xs="1"><Movie data={element}/></Col>) //TODO move tis to another file/component
                    })}
                </Row>
                <Row>
                    <Col xs="auto">
                        {this.state.pageNumber > 1 && <Button color="danger" onClick={this.loadPrevious.bind(this)}>Load Previous</Button>}
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