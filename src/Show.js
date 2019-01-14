import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import Movie from "./Movie";
import {bindActionCreators} from "redux";
import {pageNumberInc,
    pageNumberDec,
    addMoviesToState,
    getPageCount} from "./actions/Actions";
import {connect} from "react-redux";

class Show extends Component {

    getMovies(pageNumber) {
        return fetch(`http://192.168.56.105:2001/getMoviesByPage/${this.props.itemsPerPage}/${pageNumber}`)
            .then(response => response.json())
    }

    getMovieCount() {
        return fetch(`http://192.168.56.105:2001/getMovieCount`)
            .then(response => response.json())
    }

    componentWillMount() {
        this.getMovies(this.props.pageNumber).then(data => {
            this.props.addMoviesToState({payload: data});
        });

        this.getMovieCount().then(movieCount => {
            const moviesPerPage = Math.ceil(movieCount / this.props.itemsPerPage);
            this.props.getPageCount({payload: moviesPerPage});
        })
    }


    loadNext() {
        const __this = this;
        let newPageNumber = this.props.pageNumber + 1;
        this.getMovies(newPageNumber).then((data) => {
            if (data.length > 0) {
                __this.props.pageNumberInc();
                __this.props.addMoviesToState({payload: data});
             }
        })
    }

    loadPrevious() {
        const __this = this;
        let newPageNumber = this.props.pageNumber - 1;
        this.getMovies(newPageNumber).then((data) => {
            __this.props.pageNumberDec();
            __this.props.addMoviesToState({payload: data});
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <Row>
                    {this.props.movies.map((element, i) => <Col xs="1" key={i}><Movie data={element}/></Col>)}
                </Row>
                <Row>
                    <Col xs="12">
                        {this.props.pageNumber} / {this.props.pageCount}
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto">
                        {this.props.pageNumber > 1 &&
                        <Button color="danger" onClick={this.loadPrevious.bind(this)}>Load Previous</Button>}
                    </Col>
                    <Col xs="auto">
                        {this.props.pageNumber !== this.props.pageCount &&
                        <Button color="primary" onClick={this.loadNext.bind(this)}>Load Next</Button>}
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pageNumber: state.pageCounter.pageNumber,
        pageCount: state.pageCounter.pageCount,
        itemsPerPage: state.pageCounter.itemsPerPage,
        movies: state.moviesDB.movies
    }
}

const actionCreators = {
    pageNumberInc,
    pageNumberDec,
    addMoviesToState,
    getPageCount
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
