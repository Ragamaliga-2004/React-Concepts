import React from "react";

const Home = () => {
  console.log("Home Page loading");

  const textStyle = {
    textAlign: "center",
    margin: "20px 0",
    color: "darkorange",
    fontSize: "18px",
  };

  return (
    <div>
      <h3 style={textStyle}>This is Home Page (Normal Loading)</h3>
    </div>
  );
};

export default Home;
