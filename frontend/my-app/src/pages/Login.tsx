import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(form);
      navigate("/", { replace: true });
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--color-bg) text-(--color-text)">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 border rounded-lg border-(--color-border)"
      >
        <h1 className="text-xl font-semibold mb-1">Sign in</h1>
        <p className="text-sm text-(--color-muted) mb-4">
          Access your workspace
        </p>

        <label className="block text-sm mb-1">Username</label>
        <input
          className="w-full mb-4 p-2 rounded border border-(--color-border)"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />

        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          className="w-full mb-4 p-2 rounded border border-(--color-border)"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 rounded bg-(--color-accent) text-white"
        >
          Login
        </button>

        <p className="text-xs mt-4 text-(--color-muted)">
          Use your assigned credentials to continue.
        </p>
      </form>
    </div>
  );
}
