import React, { Suspense, lazy, useState } from "react";
const LazyPage = lazy(() => import("./About"));
import Home from "./Home";
import Spinner from "./Spinner";

const App = () => {
  const [showNormal, setShowNormal] = useState(false);
  const [showLazy, setShowLazy] = useState(false);

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e0f2ff, #f9fafb)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "30px",
    width: "100%",
    maxWidth: "600px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  };

  const headingStyle = {
    color: "#1e3a8a",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subHeadingStyle = {
    color: "#334155",
    fontSize: "18px",
    fontWeight: "600",
    margin: "10px 0",
  };

  // Responsive adjustments
  const responsiveStyle = `
    @media (max-width: 600px) {
      h1 { font-size: 20px !important; }
      h2 { font-size: 18px !important; }
      button { width: 100% !important; font-size: 14px !important; }
      div.card { padding: 20px !important; }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{responsiveStyle}</style>
      <h1 style={headingStyle}>Lazy Loading Demo</h1>

      <div className="card" style={cardStyle}>
        <h2 style={subHeadingStyle}>Normal Component Loading</h2>
        <button style={buttonStyle} onClick={() => setShowNormal(!showNormal)}>
          {showNormal ? "Hide" : "Show"} Normal Component
        </button>
        {showNormal && <Home />}
      </div>

      <div className="card" style={cardStyle}>
        <h2 style={subHeadingStyle}>Lazy Component Loading</h2>
        <button style={buttonStyle} onClick={() => setShowLazy(!showLazy)}>
          {showLazy ? "Hide" : "Show"} Lazy Component
        </button>
        {showLazy && (
          <Suspense fallback={<Spinner />}>
            <LazyPage />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default App;
