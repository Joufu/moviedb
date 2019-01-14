import { INCREMENT_PAGENUM, DECREMENT_PAGENUM, PAGE_COUNT} from '../actions/ActionTypes';

const initialState = {pageNumber: 1, itemsPerPage: 6, pageCount: 0};
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
        case PAGE_COUNT:
            return {
                ...state,
                pageCount: action.payload
            };
        default:
            return state;
    }
}
