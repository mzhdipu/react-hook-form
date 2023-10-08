import React, { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PreLoader from "../../../Components/Shared/PreLoader/PreLoader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();

  if (loading) {
    return <PreLoader></PreLoader>;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;
