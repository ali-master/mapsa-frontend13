/* eslint-disable */

import {
  createStore as defaultCreateStore,
  combineReducers as defaultCombineReducers,
} from "redux";
import {
  createStore as pairCreateStore,
  combineReducers as pairCombineReducers,
} from "./pair";
import {
  timerReducer,
  timerActions,
  counterReducer,
  counterActions,
} from "./reducers";
var suite = new Benchmark.Suite("Redux Benchmark");

suite
  .add("Default", async () => {
    const defaultCombinedReducers = defaultCombineReducers({
      timerA: timerReducer,
      timerB: timerReducer,
      timerC: timerReducer,
      timerD: timerReducer,
      timerE: timerReducer,
      timerF: timerReducer,
      timerG: timerReducer,
      timerH: timerReducer,
      timerI: timerReducer,
      timer1: timerReducer,
      timer2: timerReducer,
      timer3: timerReducer,
      timer4: timerReducer,
      timer5: timerReducer,
      timer6: timerReducer,
      timer7: timerReducer,
      timer8: timerReducer,
      timer9: timerReducer,
      timer10: timerReducer,
      timer11: timerReducer,
      timer12: timerReducer,
      timer13: timerReducer,
      timer14: timerReducer,
      timer15: timerReducer,
      timer16: timerReducer,
      timer17: timerReducer,
      timer18: timerReducer,
      timer19: timerReducer,
      timer20: timerReducer,
      counter: counterReducer,
    });
    const defaultStore = defaultCreateStore(defaultCombinedReducers);

    for (let index = 0; index < 50; index++) {
      if (index % 2 === 0) {
        defaultStore.dispatch({
          type: counterActions.increment,
        });
      } else {
        defaultStore.dispatch({
          type: counterActions.decrement,
        });
      }
    }
  })
  .add("Pair", async () => {
    const pairCombinedReducers = pairCombineReducers({
      timerA: timerReducer,
      timerB: timerReducer,
      timerC: timerReducer,
      timerD: timerReducer,
      timerE: timerReducer,
      timerF: timerReducer,
      timerG: timerReducer,
      timerH: timerReducer,
      timerI: timerReducer,
      timer1: timerReducer,
      timer2: timerReducer,
      timer3: timerReducer,
      timer4: timerReducer,
      timer5: timerReducer,
      timer6: timerReducer,
      timer7: timerReducer,
      timer8: timerReducer,
      timer9: timerReducer,
      timer10: timerReducer,
      timer11: timerReducer,
      timer12: timerReducer,
      timer13: timerReducer,
      timer14: timerReducer,
      timer15: timerReducer,
      timer16: timerReducer,
      timer17: timerReducer,
      timer18: timerReducer,
      timer19: timerReducer,
      timer20: timerReducer,
      counter: counterReducer,
    });
    const pairStore = pairCreateStore(pairCombinedReducers);

    for (let index = 0; index < 50; index++) {
      if (index % 2 === 0) {
        pairStore.dispatch({
          type: counterActions.increment,
          reducer: "counter",
        });
      } else {
        pairStore.dispatch({
          type: counterActions.decrement,
          reducer: "counter",
        });
      }
    }
  })
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  .run({ async: true });
