import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

type Props = {
  role: "admin" | "user";
  children: React.ReactNode;
};

export default function RequireRole({ role, children }: Props) {
  const { user } = useAuth();

  if (!user || user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
