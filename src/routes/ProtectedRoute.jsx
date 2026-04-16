import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import { useEffect } from "react";
import fetchData  from "../scripts/fetchData.js";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
