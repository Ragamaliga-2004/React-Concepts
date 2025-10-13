import React from "react";
import { useState } from "react";

const FahreheitInput = ({fahrenheit,onFahrenheitChange}) => {
  return (
    <div>
      <h1>Fahreheit: {fahrenheit}</h1>
      <input
        type="text"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
      />
    </div>
  );
};

export default FahreheitInput;
