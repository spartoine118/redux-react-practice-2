export interface Action {
    type: string
    payload?: object
}

// export type TState = Record<string, unknown>;

export type UnaryFunction<T, R> = (input: T) => R;

// export type Reducer<TState, Action> = (state: TState, action: Action) => TState;

// export type ReducerDictionary<
//   TState extends Record<K, unknown>,
//   K extends string
// > = Record<K, Reducer<TState[K], Action>>;

export interface ToDoItem {
    toDo: string,
    done: boolean
}