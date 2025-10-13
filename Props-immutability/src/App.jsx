import React, { useState } from "react";

function Greeting(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{props.name}</h1>
      <h3>Count in Child: {props.count}</h3>
      <button
        onClick={props.increment}
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        INCREMENT
      </button>
    </div>
  );
}

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width:"100vw",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #e0f2fe, #c7d2fe)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Greeting name="PROPS IMMUTABILITY" count={count} increment={increment} />
      <h3 style={{ marginTop: "20px", fontSize: "18px", color: "#1f2937" }}>
        Count in Parent: {count}
      </h3>
    </div>
  );
};

export default App;
