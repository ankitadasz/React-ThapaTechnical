import { useReducer, useState } from "react";

export const ReducerComponent = () => {
  const initialState = {
    count: 0,
    inc:2,
    dec:1,
  };
  const reducer = (state, action) => {
    console.log(state, action);
    // if (action.type === "Increment") {
    //   return state + 1;
    // }
    // if (action.type === "Decrement") {
    //   return state - 1;
    // }
    // if (action.anki === "Reset") {
    //   return (state = 0);
    // }
    switch (action.type) {
      case "Increment":
        return {
            ...state,
            count:state.count + state.inc};
      case "Decrement":
        return {count:state.count - state.dec};
      case "Reset":
        return {count:0};

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(useReducer(reducer, 0));
  return (
    <div
      className={`p-4 flex flex-col justify-center
    items-center
    h-lvh`}
    >
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
};
