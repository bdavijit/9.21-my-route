import React, { useState } from "react";

const Counter = ({limit , step, name}) => {
  // const limit = 100;
// let value = 1;
  const [count, setCount] = useState(0);

  setTimeout(() => {
    if (count >= limit) {
              return;
    }
    setCount(count + step);
  }, 10);

  return (
    <>
      <div className="w-full p-6">
        <h1 className="text-4xl">{name}</h1>
        <div className="text-3xl">{count}</div>
      </div>
    </>
  );
};

export default Counter;
