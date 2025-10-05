import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./protectedRouting/Dashboard";
import Home from "./protectedRouting/Home";
import Login from "./protectedRouting/Login";
import ProtectedRoute from "./protectedRouting/ProtectedRoute";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Link to="/" style={{border:"2px solid black", backgroundColor:'lightpink',margin:'10px', height:'100px',width:'100px'}}>Home </Link>
      <Link to="/dashboard" style={{border:"2px solid black", backgroundColor:'lightpink',margin:'10px', height:'100px',width:'100px'}}>Dashboard</Link>
      <Link to="/login" style={{border:"2px solid black", backgroundColor:'lightpink',margin:'10px', height:'100px',width:'100px'}}>Login</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard setIsLoggedIn={setIsLoggedIn} user={user} />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
      </Routes>
    </Router>
  );
};
export default App;










