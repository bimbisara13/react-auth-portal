import Navbar from "../components/Navbar";
import { useAuth } from "../auth/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-xl font-semibold mb-2">Dashboard</h1>

        <p className="mb-1">
          Welcome back, {user?.firstName}.
        </p>

        <p className="text-(--color-muted)">
          You are logged in as <strong>{user?.role}</strong>.
        </p>
      </main>
    </>
  );
}
