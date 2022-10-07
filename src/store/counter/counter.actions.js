import { DECREMENT, INCREMENT, RESET, SET } from "./counter.constants";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function set(value) {
  return {
    type: SET,
    payload: {
      value
    }
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
