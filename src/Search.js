import React, {Component} from "react";
import Movie from "./Movie";
import {Button, Col, Input, Row} from "reactstrap";

//Klausimas del isorinio this.
class Search extends Component {

    state = {
        searchInput: '',
        movies: [],
        itemsPerPage: 5,
        pageNumber: 1
    };

    async handleSearchInput(e) {
        const __this = this;
        await this.setState({movies: [], pageNumber: 1, searchInput: e.target.value});
        this.findMovies(this.state.pageNumber).then(data => {
            __this.setState({movies: [...data]});
        })
    }


    async findMovies(pageNumber) {
        console.log(this.state.searchInput);
        const parameters = {
            pageNumber: pageNumber,
            itemsPerPage: this.state.itemsPerPage,
            searchInput: this.state.searchInput
        };
        return await fetch(`http://localhost:2001/search/`, {
            method: 'POST',
            body: JSON.stringify(parameters),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    }

    loadNext() {
        let newPageNumber = this.state.pageNumber + 1;
        const __this = this;
        this.findMovies(newPageNumber).then((data) => {
            if (data.length > 0) {
                __this.setState({movies: [...data], pageNumber: newPageNumber});
            }
        })
    }

    loadPrevious() {
        let newPageNumber = this.state.pageNumber - 1;
        const __this = this;
        this.findMovies(newPageNumber).then((data) => {
            __this.setState({movies: [...data], pageNumber: newPageNumber});
        })
    }

    // onSearchClicked() {
    //     this.setState({pageNumber: 1});
    //     const __this = this;
    //     this.findMovies(this.state.pageNumber).then(data => {
    //         __this.setState({movies: [...data]});
    //     })
    // }

    render() {
        return (
            <div>
                <Input onChange={this.handleSearchInput.bind(this)} value={this.state.searchInput}/>
                <Row>
                    {this.state.movies.map((element, i) => <Col xs="1" key={i}><Movie data={element} /></Col>)}
                    {/*Klauimas  key={i}*/}
                </Row>
                {this.state.movies.length > 0 && <Row>
                    <Col xs="auto">
                        {this.state.pageNumber > 1 && <Button color="danger" onClick={this.loadPrevious.bind(this)}>Load Previous</Button>}
                    </Col>
                    <Col xs="auto">
                        <Button color="primary" onClick={this.loadNext.bind(this)}>Load Next</Button>
                    </Col>
                </Row>}
            </div>
        );
    }
}

export default Search