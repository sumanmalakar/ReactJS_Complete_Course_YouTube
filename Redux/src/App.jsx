import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementBy20 } from "./redux/counterSlice";

const App = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
      <button onClick={()=>dispatch(incrementBy20())}>IncreaseBy20</button>
    </div>
  );
};

export default App;
