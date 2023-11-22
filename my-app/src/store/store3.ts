import { Action, UnaryFunction } from '../types'
import { COUNTER_KEY, counterReducer } from './counterSlice/counterReducer';
import { TO_DO_KEY, toDoReducer } from './toDoSlice/toDoReducer';

// can use object instead of unknown
export type GlobalState = Record<string, unknown>

// can use object instead of unknown
export type ReducersDictionary = Record<string, unknown>


export class Store3 {
  private state: GlobalState;
  private reducers: ReducersDictionary;
  private listeners = new Set<UnaryFunction<GlobalState, void>>()

  constructor(reducers: ReducersDictionary, state: GlobalState = {}) {
    this.reducers = reducers;
    this.state = this.reduce({
        type: 'none'
    }, state)
  }

  
  public get globalState() : GlobalState {
    return this.state
  }

  
  public get globalReducers() : ReducersDictionary {
    return this.reducers
  }
  
  

  dispatch(action: Action): void {  
    this.state = this.reduce(action, this.state);
    this.listeners.forEach((listener) => listener(this.state))
  }

  subscribe(fn: (state: GlobalState) => void) {
    fn(this.state)
    this.listeners.add(fn)

    return () => {this.listeners.delete(fn)}
  }

  private reduce(action: Action, state: GlobalState): GlobalState {
    const result = Object.entries(this.reducers).reduce(
      (prevState, [key, reducer]: any) => ({
        ...prevState,
        [key]: reducer((prevState as any)[key], action),
      }),
      state
    );
    return result;
  }
}

export const reducers: ReducersDictionary = {
    [COUNTER_KEY]: counterReducer,
    [TO_DO_KEY]: toDoReducer,
}

export const store = new Store3(reducers)