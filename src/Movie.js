import React, {Component} from "react";
import {Card, CardBody, CardTitle, CardImg} from "reactstrap";

//<div>{element.strInstructions}</div>

class Movie extends Component {

    // state = { showMore: false }

    // showMore () {
    //     this.setState({showMore: true})
    // }

    // showText () {
    //     if (this.state.showMore){
    //         return this.props.data.strInstructions
    //     } else {
    //         return this.props.data.strInstructions.slice(0,5)
    //     }
    // }
    getImageLink() {
        return "https://image.tmdb.org/t/p/w185/" + this.props.data.poster_path;
    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src={this.getImageLink()} />
                    <CardBody>
                        <CardTitle className="text-center movie-card-text" >{this.props.data.title}</CardTitle>
                    </CardBody>
                </Card>
                {/*<div>{this.showText.apply(this)}</div>*/}
                {/*<button onClick={this.showMore.bind(this)}>Show more</button>*/}
            </div>
        );
    }
}

export default Movie