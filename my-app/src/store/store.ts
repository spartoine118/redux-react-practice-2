import { Action } from "../types";
import { COUNTER_KEY, CounterState } from "./counterSlice/counterReducer";

interface GlobalState {
    [COUNTER_KEY]: CounterState
}

export class Store {
    private state: GlobalState
    private reducers: {[key: string]: Function}

    constructor(reducers: {[key: string]: Function} = {}) {
        this.reducers = reducers
        this.state = this.reduce(this.state, {type: ''})
    }

    
    public get value() {
        return this.state
    }
    

   public dispatch(action: Action) {
        this.state = this.reduce(this.state, action)
    }

    private reduce(state: {[key: string]: any}, action: Action) {
        let newState = {...this.value}
        for (const prop in this.reducers) {
            newState[prop as keyof GlobalState] =  this.reducers[prop](state[prop], action)
        }   
        return newState
      }

    public subscribe() {}
}