import React, { useState } from "react";

const Card = ({ title, description }) => {
  const cardStyle = { 
    textAlign: "center",
    width:"350px",
    height:"200px",
    padding:"50px"
  };

  const titleStyle = {
    color: "hsla(236, 83%, 52%, 1.00)",
    fontSize: "20px",
    fontWeight: "700",
  };

  const descStyle = {
    color: "darkgreen",
    fontSize: "15px",
    marginBottom: "10px",
    lineHeight: "1.5",
    textAlign:"justify",
    padding:"10px"
  };

  const hoverTextStyle = {
    fontWeight: "600",
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descStyle}>{description}</p>
    </div>
  );
};

export default Card;
