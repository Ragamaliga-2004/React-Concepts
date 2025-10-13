import React from "react";
import { useState } from "react";

function Greeting(props) {
  return (
    <div>
     <h1>{props.name}</h1>
     <h1>Count in Child: {props.count}</h1>
     <button onClick={props.increment}>INCREMENT</button>
    </div>
  )

}

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div>
      <Greeting name="Raga" count={count} increment={increment} />
     <h1>Count in Parent: {count}</h1>

    </div>
  );
};

export default App;
