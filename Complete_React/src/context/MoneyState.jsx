import React, { useState } from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const money = 20;
  const dollar = 10;
  const [counter, setCounter] = useState(0)
  const name = 'suman'
  return (
    <MoneyContext.Provider
      value={{
        dollar,
        money,
        counter,
        setCounter,
        name,
      }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
