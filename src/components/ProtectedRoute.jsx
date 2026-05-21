import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  // If authenticated, render child routes through <Outlet />. Otherwise, force-redirect to login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}