import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahreheitInput";

const App = () => {
  const [temperature, setTemperature] = useState(0);
  const [scale, setScale] = useState("C");

  const toCelsius = (f) => ((f - 32) * 5) / 9;
  const toFahrenheit = (c) => (c * 9) / 5 + 32;

  const handleCelsiusChange = (value) => {
    setScale("C");
    setTemperature(value);
  };

  const handleFahrenheitChange = (value) => {
    setScale("F");
    setTemperature(value);
  };

  const temp = parseFloat(temperature);
  const celsius =
    scale === "F" && !isNaN(temp) ? toCelsius(temp) : scale === "C" ? temp : "";
  const fahrenheit =
    scale === "C" && !isNaN(temp) ? toFahrenheit(temp) : scale === "F" ? temp : "";

  return (
    <div
      style={{
        height: "100vh",
        width:"100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(145deg, #ffffff, #dfe9f3)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          borderRadius: "20px",
          padding: "40px",
          width: "380px",
          textAlign: "center",
          transform: "perspective(1000px) rotateX(2deg)",
        }}
      >
        <h1
          style={{
            color: "#1e3c72",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            marginBottom: "20px",
          }}
        >
           Temperature Converter
        </h1>

        <CelsiusInput celsius={celsius} onCelsiusChange={handleCelsiusChange} />
        <FahrenheitInput
          fahrenheit={fahrenheit}
          onFahrenheitChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
};

export default App;
