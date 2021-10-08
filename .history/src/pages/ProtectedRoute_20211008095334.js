import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ isAdmin,setIsAdmin, Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAdmin) {
          return <Component isAdmin={isAdmin} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
