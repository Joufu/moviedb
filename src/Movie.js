import React, {Component} from "react";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";

class Movie extends Component {

    getImageLink() {
        return "https://image.tmdb.org/t/p/w185/" + this.props.data.poster_path;
    }

    render() {
        return (
              <div>
                <Card>
                    <CardImg top width="100%" src={this.getImageLink()}/>
                    <CardBody>
                        <CardTitle className="text-center movie-card-text">{this.props.data.title}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Movie