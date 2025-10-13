import React from 'react'

const Card = ({ title, ContentComponent }) => {
  return (
    <div style={{
      border: "2px solid #1a73e8",
      borderRadius: "16px",
      width: "320px",
      padding: "20px",
      backgroundColor: "#ffffff",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease"
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <h3 style={{
        backgroundColor: "#1a73e8",
        color: "white",
        borderRadius: "8px",
        padding: "10px 0",
        marginBottom: "15px"
      }}>
        {title}
      </h3>
      <ContentComponent />
    </div>
  )
}

export default Card
