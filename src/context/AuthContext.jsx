import { createContext, useEffect, useState } from "react";
import { AuthContext } from "./auth_context_export";

export function AuthProvider({ children }) {
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem("userRole") || null;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isAuthenticated ? "true" : "false");
  
    if (userRole) {
      localStorage.setItem("userRole", userRole);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [isAuthenticated, userRole]);

  const login = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
