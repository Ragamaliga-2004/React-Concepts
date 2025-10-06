import React from "react";
import { useState,useMemo } from "react";

function ExpensiveCalculation({ number }) {
  console.log("Running Expensive calculation");
  let result = 0;
  for (let i = 0; i <= 10000000; i++) {
    result += number;
  }
  return result;
}

const ExampleUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const calculatedValue = useMemo(()=>(ExpensiveCalculation({number})),[number]);

  return (
    <div>
      <h1>Values:{calculatedValue},{count}</h1>
      <button onClick={()=>setNumber(prevNumber=>prevNumber+1)}>Change Number</button>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Change Count</button>
    </div>
  );
};

export default ExampleUseMemo;



