import React, {Component} from 'react';
import externalMovieApi from './externalMovieApi'
import mongoMovieApi from './mongoMovieApi'
import form from './form'

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
                <movieForm/>
                <button onClick={this.addRandomMovie.bind(this)}>Add one random movie</button>
            </div>
        );
    }
}

export default Add