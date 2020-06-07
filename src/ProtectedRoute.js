import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      JSON.parse(localStorage.getItem("isAuth")) === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/siemu",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default ProtectedRoute;
