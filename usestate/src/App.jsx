import React, { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("smokewhite");

  const colors = [
    "lightblue",
    "lightpink",
    "lightgrey",
    "lightgreen",
    "lightyellow",
  ];

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s ease",
      }}
    >
      <h1
        style={{
          fontSize: "35px",
          color: bgColor === "white" ? "#333" : "black",
          marginBottom: "60px",
          textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        🎨 Click a color to change the background
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              backgroundColor: color,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          ></button>
        ))}
      </div>

      <p
        style={{
          marginTop: "50px",
          color: bgColor === "white" ? "#333" : "black",
          fontWeight: "calibri",
          fontSize: "25px",
          letterSpacing: "2px",
        }}
      >
        {bgColor === "white"
          ? "No Color Selected"
          : `SELECTED: ${bgColor.toLowerCase()}`}
      </p>
    </div>
  );
};

export default App;
