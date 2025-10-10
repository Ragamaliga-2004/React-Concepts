import React, { useState } from "react";

const WithHoverEffect = (WrapperComponent) => {
  return (props) => {
    const [hover, setHover] = useState(false);
    const hoverStyle = {
      border: "1px solid rgba(0,0,0,0.08)",
      borderRadius:"20px",
      backgroundColor: hover ? "#f9fafb" : "#ffffff",
      boxShadow: hover
        ? "0 8px 24px rgba(0,0,0,0.15)"
        : "0 4px 10px rgba(0,0,0,0.08)",
      transform: hover ? "translateY(-6px)" : "translateY(0)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      margin: "10px auto",
    };

    return (
      <div
        style={hoverStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* props - props we are sending to card and button (Eg:title,description=>Card,label=>button) */} 
        {/* hover- new functionality that we are sending to the original component */}
        <WrapperComponent {...props} hover={hover} />  
      </div>
    );
  };
};

export default WithHoverEffect;
