import { ADD_MOVIES_TO_STATE } from '../actions/ActionTypes'
const initialState = {movies: []};

export default function moviesReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_MOVIES_TO_STATE:
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state
    }
}