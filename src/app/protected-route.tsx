import { ROUTES } from "@/shared/model/routes";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

export function ProtectedRoute() {
  const session = null;

  if (!session) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return <Outlet />;
}
