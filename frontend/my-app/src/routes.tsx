import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

import RequireAuth from "./auth/RequireAuth";
import RequireRole from "./auth/RequireRole";
import { useAuth } from "./auth/useAuth";

export default function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Redirect logged-in users away from login */}
      <Route
        path="/login"
        element={
          user ? <Navigate to="/" replace /> : <Login />
        }
      />

      {/* Protected dashboard */}
      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      {/* Admin-only route */}
      <Route
        path="/admin"
        element={
          <RequireAuth>
            <RequireRole role="admin">
              <Admin />
            </RequireRole>
          </RequireAuth>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
