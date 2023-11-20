// import { Action } from "../types";
// import {
//   COUNTER_KEY,
//   CounterPartialState,
//   CounterState,
//   counterReducer,
// } from "./counterSlice/counterReducer";

// export interface GlobalState {
//   [COUNTER_KEY]: CounterState;
// }

// export type UnaryFunction<T, R> = (value: T) => R;

// export type Reducer<TState, TInput> = (state: TState, input: TInput) => TState;

// export type ReducerDictionary<
//   TState extends Record<K, unknown>,
//   K extends string | number | symbol = keyof TState
// > = Record<K, Reducer<TState[K], Action>>;

// export class Store<
//   TState extends Record<K, unknown>,
//   K extends string | number | symbol = keyof TState
// > {
//   private state: TState;
//   private reducers: ReducerDictionary<TState>;
//   private listeners = new Set<UnaryFunction<TState, void>>();

//   constructor(
//     reducers: ReducerDictionary<TState>,
//     initialState: TState = {} as TState
//   ) {
//     this.reducers = reducers;
//     this.state = this.reduce(initialState, {
//       type: "none",
//     });
//   }

//   get value(): TState {
//     return this.state;
//   }

//   dispatch(action: Action): void {
//     this.state = this.reduce(this.state, action);
//     this.listeners.forEach((fn) => fn(this.state));
//   }

//   private reduce(state: TState, action: Action): TState {
//     const result = Object.entries(this.reducers).reduce(
//       (state, [key, reducer]: any) => ({
//         ...state,
//         [key]: reducer((state as any)[key], action),
//       }),
//       state
//     );

//     return result;
//   }

//   subscribe(fn: (state: TState) => void) {
//     fn(this.state);
//     this.listeners.add(fn);

//     return () => {
//       this.listeners.delete(fn);
//     };
//   }
// }

// export const reducers = {
//   [COUNTER_KEY]: counterReducer,
// };

// export const store = new Store<GlobalState>(reducers);
