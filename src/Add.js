import React, {Component} from 'react';
import externalMovieApi from './externalMovieApi'
import mongoMovieApi from './mongoMovieApi'
import Form from './Form'

class AddRemove extends Component {

    state = {
        title: '',
        release_date: ''
    };

    async addRandomMovie() {
        let randomPage = Math.ceil(Math.random() * 100);
        let results = await externalMovieApi.getMoviesFromApi(randomPage);
        let randomResult = Math.floor(Math.random() * results.length);
        let randomMovie = results[randomResult];
       // console.log(randomMovie);
        mongoMovieApi.addMovie(randomMovie)
    }

   async inputHandler(e) {
        e.preventDefault();
        const {id, value} = e.target;
        switch (id) {
            case 'movieTitle':
                await this.setState({title: value});
                break;
            case 'movieDate':
                await this.setState({release_date: value});
                break;
            default:
                break;
        }
    }

    async addOrDeleteMovie (e) {
        e.preventDefault();
        const movie = this.state;
        const {id} = e.target;
        switch (id) {
            case 'add':
                await mongoMovieApi.addMovie(movie);
                break;
            case 'delete':
                await mongoMovieApi.deleteMovie(movie);
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                {Form.addRemoveMovie.bind(this)()}
            </div>
        );
    }
}

export default AddRemove