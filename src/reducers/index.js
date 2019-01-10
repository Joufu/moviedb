import { combineReducers } from 'redux';
import pageNumberCounter from './pageNumberCount';
import moviesReducer from './movieReducer'

const rootReducer = combineReducers({
    pageCounter: pageNumberCounter,
    moviesDB: moviesReducer
});

export default rootReducer;