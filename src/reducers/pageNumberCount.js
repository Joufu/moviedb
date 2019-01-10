import { INCREMENT_PAGENUM, DECREMENT_PAGENUM} from '../actions/ActionTypes';

//const initialState = {movies: [], pageNumber: 1, itemsPerPage: 5, pageCount: 0};
const initialState = {pageNumber: 1};

export default function pageNumberCounter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_PAGENUM:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            };
        case DECREMENT_PAGENUM:
            return {
                ...state,
                pageNumber: state.pageNumber - 1
            };
        default:
            return state;
    }
}
