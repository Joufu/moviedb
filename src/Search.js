import React, {Component} from "react";
import Movie from "./Movie";
import {Button, Col, Input, Row} from "reactstrap";
import {bindActionCreators} from "redux";
import {
    addMoviesToState,
    cleanState,
    getPageCount,
    pageNumberDec,
    pageNumberInc,
    searchString
} from "./actions/Actions";
import {connect} from "react-redux";
import showMovieDetails from "./showMovieDetails";

class Search extends Component {

    async handleSearchInput(e) {
        const __this = this;
        await this.props.searchString(e.target.value);
        this.findMovies(this.props.pageNumber).then(data => {
            __this.props.addMoviesToState({payload: data});
        })
    }

    componentWillMount() {
        this.props.cleanState()
    }

    async findMovies(pageNumber) {
        const parameters = {
            pageNumber: pageNumber,
            itemsPerPage: this.props.itemsPerPage,
            searchInput: this.props.searchInput
        };
        return await fetch(`http://192.168.56.105:2001/search/`, {
            method: 'POST',
            body: JSON.stringify(parameters),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }

    loadNext() {
        let newPageNumber = this.props.pageNumber + 1;
        const __this = this;
        this.findMovies(newPageNumber).then((data) => {
            if (data.length > 0) {
                __this.props.pageNumberInc();
                __this.props.addMoviesToState({payload: data});
            }
        })
    }

    loadPrevious() {
        let newPageNumber = this.props.pageNumber - 1;
        const __this = this;
        this.findMovies(newPageNumber).then((data) => {
            __this.props.pageNumberDec();
            __this.props.addMoviesToState({payload: data});
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <Input onChange={this.handleSearchInput.bind(this)} value={this.props.searchInput}/>
                <Row>
                    {this.props.movies.map((element, i) => <Col xs="2" key={i}><Movie data={element}/></Col>)}
                </Row>
                {this.props.movies.length > 0 && <Row>
                    <Col xs="auto">
                        {this.props.pageNumber > 1 &&
                        <Button color="danger" onClick={this.loadPrevious.bind(this)}>Load Previous</Button>}
                    </Col>
                    <Col xs="auto">
                        <Button color="primary" onClick={this.loadNext.bind(this)}>Load Next</Button>
                    </Col>
                </Row>}
                <Row>
                    <Col>
                        <div>{showMovieDetails.MovieOverview(this.props.movieDetails)}</div>
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
        movies: state.moviesDB.movies,
        searchInput: state.search.searchInput,
        movieDetails: state.moviesDB.movieDetails
    }
}

const actionCreators = {
    pageNumberInc,
    pageNumberDec,
    addMoviesToState,
    getPageCount,
    searchString,
    cleanState
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
