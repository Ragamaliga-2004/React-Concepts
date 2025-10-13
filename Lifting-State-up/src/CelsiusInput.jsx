import React from "react";

const CelsiusInput = ({ celsius, onCelsiusChange }) => {
  return (
    <div
      style={{
        background: "linear-gradient(145deg, #d4fc79, #96e6a1)",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "inset 0 2px 5px rgba(255,255,255,0.8), 0 5px 10px rgba(0,0,0,0.15)",
      }}
    >
      <h2
        style={{
          color: "#1b5e20",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          marginBottom: "10px",
        }}
      >
        🌿 Celsius: {celsius}
      </h2>
      <input
        type="text"
        value={celsius}
        onChange={(e) => onCelsiusChange(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          borderRadius: "8px",
          border: "2px solid #388e3c",
          outline: "none",
          fontSize: "16px",
          textAlign: "center",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
};

export default CelsiusInput;
