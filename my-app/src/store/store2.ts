// import { Action, ReducerDictionary, UnaryFunction } from "../types";
// import { COUNTER_KEY, CounterPartialState, counterReducer } from "./counterSlice/counterReducer";

// export class Store<TState extends Record<K, unknown>, K extends string  > {
//   private state: TState;
//   private reducers: ReducerDictionary<TState, K>;
//   private listeners = new Set<UnaryFunction<TState, void>>();

//   constructor(reducers: ReducerDictionary<TState, K>, state: TState = {} as TState) {
//     this.reducers = reducers;
//     this.state = this.reduce(state, {
//       type: "",
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
//     return result
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
//     [COUNTER_KEY]: counterReducer,
// }

// export const store = new Store(reducers)

export {}