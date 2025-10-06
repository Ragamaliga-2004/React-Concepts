import React, { useState } from "react";

export default function EmojiMoodChanger() {
  const [mood, setMood] = useState("🙂");

  const moods = [
    { emoji: "😀", text: "Happy" },
    { emoji: "😡", text: "Angry" },
    { emoji: "😢", text: "Sad" },
    { emoji: "🤩", text: "Excited" },
    { emoji: "😴", text: "Sleepy" },
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitesmoke",
        transition: "all 0.5s ease",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "20px",
          color: "#333",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
        }}
      >
        😀 CHOOSE YOUR MOOD
      </h1>

      <div style={{ fontSize: "100px", marginBottom: "40px" }}>{mood}</div>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {moods.map((m) => (
          <button
            key={m.emoji}
            onClick={() => setMood(m.emoji)}
            style={{
              fontSize: "24px",
              padding: "15px 25px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#fff",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            {m.text}
          </button>
        ))}
      </div>
    </div>
  );
}
