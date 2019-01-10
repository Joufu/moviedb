import { ADD_MOVIES_TO_STATE, CLEAN_STATE_FROM_MOVIES } from '../actions/ActionTypes'
const initialState = {movies: []};

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MOVIES_TO_STATE:
            return {
                ...state,
                movies: action.payload
            };
        case CLEAN_STATE_FROM_MOVIES:
             return {
                 ...state,
                 movies: []
             };
        default:
            return state
    }
}