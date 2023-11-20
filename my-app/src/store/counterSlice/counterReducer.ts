import { Action } from "../../types"

export const COUNTER_KEY = 'counter'

export interface CounterState {
    value: number
}

interface CounterPartialState {
    [COUNTER_KEY]: CounterState
}

const counterInitialState: CounterState = {
    value: 0
}

export const counterReducer = (state = counterInitialState, action: Action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return {...state, value: state.value + 1}
        case 'DECREAMENT':
            return {...state, value: state.value - 1}
        default:
            return state
    }
}

export const selectCounterState = (globalState: CounterPartialState): CounterState => globalState[COUNTER_KEY]

export const selectCounterValue = (globalState: CounterPartialState): number => selectCounterState(globalState).value
