import { Action, ToDoItem } from '../../types';

export const TO_DO_KEY = 'to-do';

export interface ToDoState {
  data: ToDoItem[];
}

export interface ToDoPartialState {
  [TO_DO_KEY]: ToDoState;
}

const toDoInitialState = {
  data: [],
};

export const toDoReducer = (
  state: ToDoState = toDoInitialState,
  action: Action
): ToDoState => {
  switch (action.type) {
    case 'ADD_TO_DO':
      return { ...state, data: [...state.data, action.payload as ToDoItem] };
    default:
      return state;
  }
};

export {};
