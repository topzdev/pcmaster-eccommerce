import React, { useEffect, useState } from "react";

const NumericField = ({ quantityValue, initValue }) => {
  let [value, setValue] = useState(initValue);

  const add = () => {
    setValue((value += 1));
    quantityValue(value);
  };

  const sub = () => {
    setValue(value != 1 ? (value -= 1) : 1);
    quantityValue(value);
  };

  const userInput = e => {
    let value = e.target.value;

    if (value <= 0) {
      value = 1;
    }
    setValue(value);
    quantityValue(value);
  };
  return (
    <div className="inp--quantity">
      <button onClick={sub}>&mdash;</button>
      <input className="inp" type="number" value={value} onChange={userInput} />
      <button onClick={add}>+</button>
    </div>
  );
};

export default NumericField;
