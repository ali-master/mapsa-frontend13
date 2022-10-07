import { createStore } from "redux";
import { reducers } from "./reducers.store";

export const store = createStore(reducers);
