import React, { useState } from "react";

const UseState = () => {
  const [numVal, setNumVal] = useState(0);

  const increaseNumVal = () => {
    setNumVal(numVal + 1);
  };
  const decreaseNumVal = () => {
    setNumVal(numVal - 1);
  };
  const jumpNumVal = () => {
    setNumVal(numVal + 13);
  };

  return (
    <div className="container">
      <div className="numvalue">{numVal}</div>
      <button type="button" onClick={increaseNumVal}>
        Increase
      </button>
      <button type="button" onClick={decreaseNumVal}>
        Decrease
      </button>
      <button type="button" onClick={jumpNumVal}>
        Increase by 13
      </button>
    </div>
  );
};

export default UseState;
