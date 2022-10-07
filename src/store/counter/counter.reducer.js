import { INCREMENT, DECREMENT, RESET, SET } from "./counter.constants";
import { initialState } from "./counter.state";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      console.log({
        state,
      });
      return {
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        value: state.value - 1,
      };
    case SET:
      return {
        value: action.payload.value,
      };
    case RESET:
      return {
        value: 0,
      };
    default:
      return state;
  }
}
