import React from "react";

const Dashboard = ({setIsLoggedIn,user}) => {
    function handleLogout() {
        setIsLoggedIn(false)
   }
  return (
    <div>
      <h1>Welcome {user.userName}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
