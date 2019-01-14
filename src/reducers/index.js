import { combineReducers } from 'redux';
import pageNumberCounter from './pageNumberReducer';
import moviesReducer from './movieReducer'
import searchInputReducer  from './searchInputReducer'

// const rootReducer = combineReducers({
//     pageCounter: pageNumberCounter,
//     moviesDB: moviesReducer,
//     search: searchInputReducer
// });

const appReducer = combineReducers({
    pageCounter: pageNumberCounter,
    moviesDB: moviesReducer,
    search: searchInputReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'CLEAN_STATE') {
        state = undefined
    }
    return appReducer(state, action)
};

export default rootReducer;