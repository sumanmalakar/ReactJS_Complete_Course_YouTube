import React, { useContext } from "react";
import MoneyContext from "../context/MoneyContext";

const People = () => {
  // console.log(useContext(MoneyContext))
  const data = useContext(MoneyContext);
  return (
    <div>
      <h1>This is people component </h1>
      <h3>Money = {data.money}</h3>
      <h3>Dollar = {data.dollar}</h3>
      <h1>Counter = {data.counter}</h1>
      <button onClick={() => data.setCounter(data.counter + 1)}>
        Increase
      </button>
    </div>
  );
};

export default People;
