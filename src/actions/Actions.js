import {ADD_MOVIES_TO_STATE,
    DECREMENT_PAGENUM,
    INCREMENT_PAGENUM,
    CLEAN_STATE_FROM_MOVIES
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
        payload: movies
    };

}
export function cleanStateFromMovies() {
        return {
            type: CLEAN_STATE_FROM_MOVIES,
        };
};
