export const counterActions = {
  increment: "COUNTER/INCREMENT",
  decrement: "COUNTER/DECREMENT",
  reset: "COUNTER/RESET",
};
const counterInitialState = {
  value: 0,
};
export const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case counterActions.increment:
      state.value++;
      break;
    case counterActions.decrement:
      state.value--;
      break;
    case counterActions.reset:
      state.value = 0;
      break;
  }

  return state;
};

export const timerActions = {
  increment: "TIMER/INCREMENT",
  decrement: "TIMER/DECREMENT",
  reset: "TIMER/RESET",
};
const timerInitialState = {
  value: 1,
};
export const timerReducer = (state = timerInitialState, action) => {
  switch (action.type) {
    case timerActions.increment:
      state.value++;
      break;
    case timerActions.decrement:
      state.value--;
      break;
    case timerActions.reset:
      state.value = 0;
      break;
  }

  return state;
};
