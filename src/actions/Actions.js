import {
    ADD_MOVIES_TO_STATE,
    DECREMENT_PAGENUM,
    INCREMENT_PAGENUM,
    PAGE_COUNT,
    SEARCH_STRING,
    CLEAN_STATE
} from './ActionTypes';

export function pageNumberInc() {
    return {
        type: INCREMENT_PAGENUM
    }
}

export const pageNumberDec = () => {
    return {
        type: DECREMENT_PAGENUM
    }
};

export function addMoviesToState(movies) {
    return {
        type: ADD_MOVIES_TO_STATE,
        payload: movies.payload
    };

}
export function getPageCount(moviesPerPage) {
        return {
            type: PAGE_COUNT,
            payload: moviesPerPage.payload
        };
};

export function searchString(string) {
    return {
        type: SEARCH_STRING,
        payload: string
    };
};

export function cleanState() {
    return {
        type: CLEAN_STATE
    }
}