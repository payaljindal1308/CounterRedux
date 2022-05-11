import { combineReducers } from "redux";
import counterReducer from "./reducer";
const reducerCombiner = combineReducers({
    counterReducer
})
export default reducerCombiner;