import React from 'react'

const Dashboard = () => {
  return (
    <div style={{
      backgroundColor: "#e3f2fd",
      borderRadius: "10px",
      padding: "15px",
      color: "darkblue",
      textAlign: "left"
    }}>
      <h3 style={{textAlign:"center" , color:"black"}}>Dashboard</h3>
      <p><strong>Total Users:</strong> 1012</p>
      <p><strong>Active Users:</strong> 310</p>
      <p> <strong>Non-Active Users:</strong>702</p>
    </div>
  )
}

export default Dashboard
