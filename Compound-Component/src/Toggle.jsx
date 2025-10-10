import React from "react";
import { useContext, createContext, useState } from "react";

const ToggleContext = createContext();

const ToggleCompound = ({ children }) => {
  const [on, setOn] = useState(false);
  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <ToggleContext.Provider value={{ toggle, on }}>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          padding: "40px",
          textAlign: "center",
          margin: "20px",
          backgroundColor: "whitesmoke",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        {children}
      </div>
      
    </ToggleContext.Provider>
  );
};

ToggleCompound.On = function On({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? <div>{children}</div> : null;
};

ToggleCompound.Off = function Off({ children }) {
  const { on } = useContext(ToggleContext);
  return !on ? <div>{children}</div> : null;
};

ToggleCompound.Button = function Button() {
  const { toggle, on } = useContext(ToggleContext);
  return (
    <div style={{ padding: "30px" }}>
      <button
        style={{
          backgroundColor: on ? "green" : "red",
          color: "white",
        }}
        onClick={toggle}
      >
        {on ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};

export default function Toggle() {
  return (
    <div style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"lightblue",
        width:"100vw"
    }}>
      <ToggleCompound>
        <ToggleCompound.On><h3>The Switch is <strong>ON</strong></h3></ToggleCompound.On>
        <ToggleCompound.Off><h3>The Switch is <strong>OFF</strong></h3></ToggleCompound.Off>
        <ToggleCompound.Button />
      </ToggleCompound>
    </div>
  );
}
