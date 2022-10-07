import { combineReducers } from "redux";
// Reducers
import { reducer as counterReducer } from "./counter/counter.reducer";

export const reducers = combineReducers({
  counter: counterReducer,
});
