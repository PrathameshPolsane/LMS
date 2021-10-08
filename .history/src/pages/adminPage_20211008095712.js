import React from "react";
import { withRouter } from "react-router-dom";

function AdminPage({ isAdmin, setIsAdmin }) {
  const handleSubmit = ()=>{
    
  }
  return (
    <div>
      <button onClick={handleSubmit}>Logout</button>
      <div>This is a admin page , {isAdmin ? "admin" : "non-admin"}</div>
    </div>
  );
}

export default withRouter(AdminPage);
