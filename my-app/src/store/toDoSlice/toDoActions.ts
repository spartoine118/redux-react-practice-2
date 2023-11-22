import { Action, ToDoItem } from '../../types';

export const addToDo = (toDo: ToDoItem): Action => {
  return {
    type: 'ADD_TO_DO',
    payload: toDo,
  };
};

export {};
