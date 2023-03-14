import React, { useState } from "react";

const Counter = () => {
  const [ozil, arsenal] = useState(7);

  const onIncrease = () => {
    arsenal(ozil + 1);
  };

  const onDecrease = () => {
    arsenal(ozil - 1);
  };

  const [wilshere, ARS] = useState(1);

  const plus = () => {
    ARS(wilshere + 1);
  };

  const minus = () => {
    ARS(wilshere - 1);
  };

  return (
    <div>
      <h2>{ozil}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>{wilshere}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
