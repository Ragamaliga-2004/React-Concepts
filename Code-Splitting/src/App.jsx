import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Home = lazy(() => import("./Home"));
import Spinner from "./Spinner";

const App = () => {

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Suspense>
  
    </Router>
  );
};

export default App;
