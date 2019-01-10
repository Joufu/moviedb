import  { createStore } from "redux";
import rootReducer from "../reducers"
import pageNumberCount from "../reducers/pageNumberCount"

const initialState = {};
const store = createStore(rootReducer, initialState);

export default store;