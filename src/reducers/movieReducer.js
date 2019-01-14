import { ADD_MOVIES_TO_STATE, GET_MOVIE_DETAILS } from '../actions/ActionTypes'
const initialState = {movies: [], movieDetails: []};

export default function moviesReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_MOVIES_TO_STATE:
            return {
                ...state,
                movies: action.payload
            };
        case GET_MOVIE_DETAILS:
            return{
                ...state,
                movieDetails: action.payload
            };
        default:
            return state
    }
}