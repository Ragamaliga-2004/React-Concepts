import React from "react";

const About = () => {
  console.log("About Page Loading");

  const textStyle = {
    textAlign: "center",
    margin: "20px 0",
    color: "#facc15", // dark yellow shade
    fontSize: "18px",
  };

  return (
    <div>
      <h3 style={textStyle}>This is About Page (Lazy Loading)</h3>
    </div>
  );
};

export default About;
