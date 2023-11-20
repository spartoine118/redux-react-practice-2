import { Action } from "../../types"

export const COUNTER_KEY = 'counter'

export interface CounterState {
    value: number
}

export interface CounterPartialState {
  [COUNTER_KEY]: CounterState;
}

export const counterInitialState: CounterState = {
  value: 0,
};

export const counterReducer = (state = counterInitialState, action: Action) => {
    switch (action.type) {
      case "INCREASE":
        return { ...state, value: state.value + 1 };
      case "DECREASE":
        return { ...state, value: state.value - 1 };
      default:
        return state;
    }
}

export const selectCounterState = (globalState: CounterPartialState): CounterState => globalState[COUNTER_KEY]

export const selectCounterValue = (globalState: CounterPartialState): number => selectCounterState(globalState).value
