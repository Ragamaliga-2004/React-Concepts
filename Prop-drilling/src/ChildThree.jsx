import React from "react";

const ChildThree = ({ name }) => {
  return (
    <div style={{
      margin: "20px auto",
      padding: "20px",
      width: "80%",
      backgroundColor: "#FFF5E1"
    }}>
      <h3 style={{ color: "darkblue" }}>CHILD 3 : {name}</h3>
    </div>
  );
};

export default ChildThree;
