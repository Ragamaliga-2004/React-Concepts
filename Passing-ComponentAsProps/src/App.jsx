import React from 'react'
import Card from './Card'
import ProfileInfo from './ProfileInfo'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <div style={{
      fontFamily: "Poppins, Arial, sans-serif",
      textAlign: "center",
      backgroundColor: "#f0f4f8",
      height: "100vh",
      width:"100vw",
      padding: "50px"
    }}>
      <h1 style={{ color: "#1a73e8", marginBottom: "40px" }}>Welcome</h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap"
      }}>
        <Card title="User Profile" ContentComponent={ProfileInfo} /> 
        <Card title="Dashboard" ContentComponent={Dashboard}/>
      </div>
    </div>
  )
}

export default App
