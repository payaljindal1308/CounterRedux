import { combineReducers } from "redux";
import createCounterReducer from "./reducer";

const reducerCombiner = combineReducers({
    createCounterReducer
})
console.log(reducerCombiner)
export default reducerCombiner;