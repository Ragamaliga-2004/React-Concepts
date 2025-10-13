import React from 'react'
import ChildOne from './ChildOne'

const App = () => {
  return (
    <div style={{
      margin: "10px",
      padding: "10px",
      width: "100vw",
      textAlign: "center",
      marginTop: "50px",
      color: "#333",
      display:"flex",
      flexDirection:"column",
      height:"100vh"
    }}>
      <h2>APP COMPONENT : Passing name Props to Child 1</h2>
      <ChildOne name="Raga" />
    </div>
  )
}

export default App
