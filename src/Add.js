import React, {Component} from 'react';
import externalMovieApi from './externalMovieApi'
import mongoMovieApi from './mongoMovieApi'

class Add extends Component {
    async addRandomMovie() {
        let randomPage = Math.ceil(Math.random() * 100);
        let results = await externalMovieApi.getMoviesFromApi(randomPage);
        let randomResult = Math.floor(Math.random() * results.length);
        let randomMovie = results[randomResult];
       // console.log(randomMovie);
        mongoMovieApi.addMovie(randomMovie)
    }

    render() {
        return (
            <div>
                <button onClick={this.addRandomMovie.bind(this)}>Add one random movie</button>
            </div>
        );
    }
}

export default Add