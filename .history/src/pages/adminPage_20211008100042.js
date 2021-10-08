import React from "react";
import { withRouter } from "react-router-dom";

function AdminPage({ isAdmin, setIsAdmin }) {
  console.log(localStorage.getItem("token"));
  const handleSubmit = () => {
    setIsAdmin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate");
  };

  return (
    <div>
      <button onClick={handleSubmit}>Logout</button>
      <div>This is a admin page </div>
    </div>
  );
}

export default withRouter(AdminPage);
