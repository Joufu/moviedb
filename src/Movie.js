import React, {Component} from "react";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import {bindActionCreators} from "redux";
import { movieDetails } from "./actions/Actions";
import {connect} from "react-redux";

class Movie extends Component {

    getImageLink() {
        return "https://image.tmdb.org/t/p/w185/" + this.props.data.poster_path;
    }

    handleOnclick() {
        return (this.props.movieDetails({payload: this.props.data}))

    }


    render() {
        return (
             <div>
                <Card>
                    <CardImg top width="100%" src={this.getImageLink()}/>
                    <CardBody>
                        <CardTitle onClick={this.handleOnclick.bind(this)}
                                   className="text-center movie-card-text">{this.props.data.title}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const actionCreators = {
    movieDetails
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(null, mapDispatchToProps)(Movie);