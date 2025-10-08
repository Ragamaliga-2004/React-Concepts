import React, { Suspense, lazy, useState } from "react";
const LazyPage = lazy(() => import("./About"));
import Home from "./Home";
import Spinner from "./Spinner";

const App = () => {
  const [showNormal, setShowNormal] = useState(false);
  const [showLazy, setShowLazy] = useState(false);

  return (
    <div>
      <h1 style={{ color: "blue" }}>Lazy Loading Demo</h1>
      <div>
        <h2 style={{ color: "blue" }}>Normal Component Loading</h2>
        <button onClick={() => setShowNormal(!showNormal)}>
          {showNormal ? "Hide" : "Show"} Normal Component
        </button>
        <br />
        {showNormal && <Home />}
      </div>
      <div>
        <h2 style={{ color: "darkblue" }}>Lazy Component Loading</h2>
        <button onClick={() => setShowLazy(!showLazy)}>
          {showLazy ? "Hide" : "Show"} Lazy Component
        </button>
        <br />
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
