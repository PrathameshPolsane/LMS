import React from "react";
import { withRouter } from "react-router-dom";

function AdminPage({isAdmin, setIsAdmin}) {
  return <div>This is a admin page , {isAD}</div>;
}

export default withRouter(AdminPage);
