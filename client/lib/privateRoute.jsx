// import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./authHelper";
import PropTypes from "prop-types";

export default function PrivateRoute({ children, ...rest }) {
  const location = useLocation();

  return auth.isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

//  PrivateRoute.propTypes = {
//    children: PropTypes.string.isRequired,
//  };
