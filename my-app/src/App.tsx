import React, { useState } from "react";
import "./App.css";
import { Store } from "./store/store";
import { counterReducer } from "./store/counterSlice/counterReducer";
import { Action } from "./types";

function App() {

  const testAction: Action = {type: 'DEFAULT'}
  const store = new Store(counterReducer(, testAction))

  return (
    <div className="App">
      <button></button>
      <button></button>
    </div>
  );
}

export default App;
