import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import {
  decreaseCounter,
  increaseCounter,
} from './store/counterSlice/counterActions';
import { selectCounterValue } from './store/counterSlice/counterReducer';
import { Action } from './types';
import { GlobalState, store } from './store/store3';
import { addToDo } from './store/toDoSlice/toDoActions';

export function useSelector(fn?: any) {
  const storeRef = useRef(store);
  const [state, setState] = useState<GlobalState>(store.globalState);

  useEffect(() => {
    const unsubscribe = storeRef.current.subscribe(setState);
    return () => unsubscribe();
  }, [storeRef]);

  const result = fn ? fn(state) : state;
  return result;
}

export function useDispatch() {
  const dispatch = useCallback((action: Action) => store.dispatch(action), []);
  return dispatch;
}

function App() {
  const dispatch = useDispatch();
  const value = useSelector(selectCounterValue);

  const [newToDo, setNewToDo] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(addToDo({toDo: newToDo, done: false}))
  }

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter Slice</h1>
        <button
          onClick={() => {
            dispatch(increaseCounter());
          }}
        >
          Increase
        </button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
        <div>{value}</div>
      </div>
      <div className="to-do-list-container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter a to-do" onChange={(e) => setNewToDo(e.target.value)}></input>
          <button type='submit'>Submit Form</button>
        </form>
      </div>
      <button type='button' onClick={() => console.log(store.globalState)}>LogState</button>
    </div>
  );
}

export default App;
