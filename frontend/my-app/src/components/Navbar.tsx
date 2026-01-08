import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b border-(--color-border) bg-(--color-bg)">
      <div className="flex items-center gap-6">
        <Link to="/" className="font-semibold">
          Auth Portal
        </Link>

        {user?.role === "admin" && (
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `text-sm ${
                isActive ? "text-(--color-pill) bg-(--color-pill)/20 rounded-lg" : "text-(--color-text)"
              } p-2`
            }
          >
            Admin
          </NavLink>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <span className="text-md">
          {user?.firstName} {user?.lastName}
        </span>

        <button
          onClick={logout}
          className="text-md px-2 rounded-lg py-1 bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
