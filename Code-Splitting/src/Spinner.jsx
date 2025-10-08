import React from "react";

// Spinner.jsx
// Single-file React component with inline CSS and no external stylesheets.
// Props:
//  - size (number): diameter of the spinner in px. Default 80.
//  - text (string): loading text to show. Default 'Loading...'.
//  - color (string): main spinner color. Default indigo.
//  - gap (number): spacing between spinner and text in px.

export default function Spinner({
  size = 80,
  text = "Loading...",
  color = "#4F46E5",
  gap = 12,
}) {
  const spinnerStyle = {
    width: size,
    height: size,
    display: "inline-block",
    verticalAlign: "middle",
  };

  const containerStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: gap,
    fontFamily: "Inter, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  };

  const textStyle = {
    fontSize: Math.max(12, Math.round(size / 6)),
    fontWeight: 600,
    letterSpacing: "0.2px",
    color: "#111827",
    transformOrigin: "center",
    animation: "pulseText 1.6s ease-in-out infinite",
  };

  const shadowStyle = {
    filter: "drop-shadow(0 6px 12px rgba(79,70,229,0.12))",
    borderRadius: 9999,
  };

  // Stroke width scales with size for visual balance
  const stroke = Math.max(4, Math.round(size / 16));

  return (
    <div style={containerStyle} aria-live="polite" aria-busy="true">
      {/* Inline CSS keyframes placed here so the component remains self-contained */}
      <style>{`
        @keyframes rotateSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes dash {
          0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 100, 200; stroke-dashoffset: -20px; }
          100% { stroke-dasharray: 1, 200; stroke-dashoffset: -120px; }
        }
        @keyframes pulseText {
          0% { opacity: 0.6; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-3px); }
          100% { opacity: 0.6; transform: translateY(0); }
        }
      `}</style>

      {/* SVG spinner uses both CSS animations and SVG stroke properties for a smooth, modern look */}
      <div style={{ ...spinnerStyle, ...shadowStyle }}>
        <svg
          viewBox="0 0 50 50"
          style={{ width: "100%", height: "100%", display: "block", animation: "rotateSpin 1.25s linear infinite" }}
          role="img"
          aria-hidden="true"
        >
          {/* subtle background circle */}
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth={stroke}
          />

          {/* animated arc */}
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            style={{ strokeDasharray: "90,150", animation: "dash 1.6s ease-in-out infinite" }}
          />

          {/* small glossy cap to add depth */}
          <circle cx="40" cy="10" r="1.6" fill={color} opacity="0.98" />
        </svg>
      </div>

      <div style={textStyle}>{text}</div>
    </div>
  );
}
