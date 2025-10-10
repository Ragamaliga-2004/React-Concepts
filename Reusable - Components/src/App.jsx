import React from "react";
import WithHoverEffect from "./WithHoverEffect";
import Button from "./Button";
import Card from "./Card";

const HoverCard = WithHoverEffect(Card);
const HoverButton = WithHoverEffect(Button);

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        flexDirection:"column",
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "20px",
        height: "100vh",          
        width: "100vw"
      }}
    >
      <HoverCard title="AI REVOLUTION" description="Explore how Artificial Intelligence is transforming the modern world.
From automation to creativity, AI drives innovation everywhere.
Discover its impact on healthcare, education, and business.
Step into the future where machines think, learn, and evolve." />
      <HoverButton label="Discover Trends" />
    </div>
  );
};

export default App;
