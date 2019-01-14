import { SEARCH_STRING } from '../actions/ActionTypes'
const initialState = { searchInput: ''};

export default function searchString(state = initialState, action) {

    switch (action.type) {
        case SEARCH_STRING:
            return {
                ...state,
                searchInput: action.payload
            };
        default:
            return state
    }
}