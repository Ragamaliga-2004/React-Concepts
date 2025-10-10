import React from "react";

const Button = ({ label}) => {
  return (
    <div>
      <button
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "10px",
          transition: "all 0.25s ease"
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
