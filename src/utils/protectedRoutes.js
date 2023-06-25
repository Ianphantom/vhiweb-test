import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProtectedRoutes = ({ component: Component }) => {
  const { currentUser, isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <div>Wait For A Moment</div>;
  }

  if (!currentUser || !isAuth) {
    // User is not signed in, redirect to the home page or login page
    toast.error(
      "Please Login with email eve.holt@reqres.in and password 123123",
      {
        position: "top-right",
        autoClose: 5000,
        draggable: true,
        theme: "colored",
      }
    );
    return <Navigate to='/' replace />;
  }

  // User has the required role, render the nested routes
  return <Component />;
};

export default ProtectedRoutes;
