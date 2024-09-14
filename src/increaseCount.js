import React, { useState } from "react";

const IncreaseCount = () => {
  const [count, setCount] = useState(100);
  const increaseValue = () => {
    setCount(count + 10);
  };
  return (
    <div>
      {count}
      <br />
      <button onClick={() => increaseValue()}>Button</button>
    </div>
  );
};

export default IncreaseCount;
