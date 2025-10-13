import React from "react";

const FahrenheitInput = ({ fahrenheit, onFahrenheitChange }) => {
  return (
    <div
      style={{
        background: "linear-gradient(145deg, #fddb92, #d1fdff)",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "inset 0 2px 5px rgba(255,255,255,0.8), 0 5px 10px rgba(0,0,0,0.15)",
      }}
    >
      <h2
        style={{
          color: "#b71c1c",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          marginBottom: "10px",
        }}
      >
        🔥 Fahrenheit: {fahrenheit}
      </h2>
      <input
        type="text"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          borderRadius: "8px",
          border: "2px solid #e53935",
          outline: "none",
          fontSize: "16px",
          textAlign: "center",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default FahrenheitInput;
