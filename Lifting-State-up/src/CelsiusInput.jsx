import React from "react";
import { useState } from "react";


const CelsiusInput = ({celsius,onCelsiusChange}) => {

  return (
    <div>
    <h1>Celsius: {celsius}</h1>
    <input type="text" value={celsius} onChange={(e)=> onCelsiusChange(e.target.value)}/>
    </div>
  );
};

export default CelsiusInput;
