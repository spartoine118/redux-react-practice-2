export interface Action {
    type: string
    payload?: object
}

export type TState = Record<string, unknown>;

export type UnaryFunction<T, R> = (input: T) => R;

export type Reducer<TState, Action> = (state: TState, action: Action) => TState;

export type ReducerDictionary<
  TState extends Record<K, unknown>,
  K extends string
> = Record<K, Reducer<TState[K], Action>>;

export class Store<TState extends Record<K, unknown>, K extends string> {
  private state: TState;
  private reducers: ReducerDictionary<TState, K>;
  private listeners = new Set<UnaryFunction<TState, void>>();

  constructor(reducers: ReducerDictionary<TState, K>, state: TState) {
    this.reducers = reducers;
  }

  get value(): TState {
    return this.state;
  }

  dispatch(action: Action): void {
    this.state = this.reduce(this.state, action);
    this.listeners.forEach((fn) => fn(this.state));
  }

  reduce(state: TState, action: Action): TState {
    const result = Object.entries(this.reducers).reduce((state, [key, reduc]));
  }

  subscribe(): {};
}