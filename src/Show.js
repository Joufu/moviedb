import React, {Component} from 'react';
import {Button, Col, Row} from "reactstrap";
import Movie from "./Movie";
import {bindActionCreators} from "redux";
import {pageNumberInc,
    pageNumberDec,
    addMoviesToState,
    cleanStateFromMovies} from "./actions/Actions";
import {connect} from "react-redux";


class Show extends Component {

    state = { pageNumber: 1, itemsPerPage: 5, pageCount: 0};

    getMovies(pageNumber) {
        return fetch(`http://localhost:2001/getMoviesByPage/${this.state.itemsPerPage}/${pageNumber}`)
            .then(response => response.json())
    }

    getMovieCount() {
        return fetch(`http://localhost:2001/getMovieCount`)
            .then(response => response.json())
    }

    componentWillMount() {
        this.getMovies(this.props.pageNumber).then((data) => {
            this.props.addMoviesToState({payload: data});
           // console.log(this.props.movies[0].payload[0])
        });

        this.getMovieCount().then(movieCount => {
            const pageCount = Math.ceil(movieCount / this.state.itemsPerPage);
            this.setState({pageCount: pageCount})
        })
    }

    loadNext() {
        let newPageNumber = this.state.pageNumber + 1;
        const __this = this;
        const increase = __this.props.pageNumberInc;
        this.getMovies(newPageNumber).then((data) => {
            if (data.length > 0) {
                __this.props.addMoviesToState({payload: data});
                __this.props.pageNumberInc();
                __this.setState({pageNumber: newPageNumber});
            }
        })
    }

    loadPrevious() {
        let newPageNumber = this.state.pageNumber - 1;
        const __this = this;
        this.getMovies(newPageNumber, this.state.itemsPerPage).then((data) => {
            __this.props.pageNumberDec();
            __this.setState({movies: data, pageNumber: newPageNumber});
        })
    }

    render() {
        return (
            <div>
                <Row>
                    {this.props.movies.map((element, i) => <Col xs="1" key={i}><Movie data={element}/></Col>)}
                    {/*<div>{this.props.movies}</div>*/}
                </Row>
                <Row>
                    <Col xs="auto">
                        {this.state.pageNumber > 1 &&
                        <Button color="danger" onClick={this.loadPrevious.bind(this)}>Load Previous</Button>}
                    </Col>
                    <Col xs="auto">
                        {this.state.pageNumber !== this.state.pageCount &&
                        <Button color="primary" onClick={this.loadNext.bind(this)}>Load Next</Button>}
                        <div>{this.props.pageNumber} Page num</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        {this.state.pageNumber} / {this.state.pageCount}
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pageNumber: state.pageCounter.pageNumber,
        movies: state.moviesDB.movies[0]
    }
}

const actionCreators = {
    pageNumberInc,
    pageNumberDec,
    addMoviesToState,
    cleanStateFromMovies
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Show);
