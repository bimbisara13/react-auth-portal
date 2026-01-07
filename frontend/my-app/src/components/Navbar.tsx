import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
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
                isActive ? "text-(--color-accent)" : "text-(--color-muted)"
              }`
            }
          >
            Admin
          </NavLink>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <span className="text-sm">
          {user?.firstName} {user?.lastName}
        </span>

        <button
          onClick={logout}
          className="text-sm text-(--color-accent) hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
