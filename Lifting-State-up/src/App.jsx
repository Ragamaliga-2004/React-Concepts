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
    <div>
      <CelsiusInput celsius={celsius} onCelsiusChange={handleCelsiusChange} />
      <FahrenheitInput
        fahrenheit={fahrenheit}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </div>
  );
};

export default App;
