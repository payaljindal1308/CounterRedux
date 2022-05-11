

import { createStore } from 'redux';
import reducerCombiner from '../Reducer/combineReducer';
export const store = createStore(reducerCombiner)

