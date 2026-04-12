import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DefaultPage from "../pages/DefaultPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Dashboard from "../pages/DashboardPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
