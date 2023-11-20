import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import {
  decreaseCounter,
  increaseCounter,
} from "./store/counterSlice/counterActions";
import {
  CounterPartialState,
  selectCounterValue,
} from "./store/counterSlice/counterReducer";
import { store } from "./store/store";
import { Action } from "./types";

export function useSelector<R>(fn?: any) {
  const storeRef = useRef(store);
  const [state, setState] = useState<CounterPartialState>(store.value);

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
  const value = useSelector(selectCounterValue);
  const dispatch = useDispatch();

  return (
    <div className="App">
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
  );
}

export default App;
