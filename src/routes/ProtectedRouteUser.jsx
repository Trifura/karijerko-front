import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingPage from "../core/components/LoadingPage.jsx";

export default function ProtectedRouteUser({ children, allowedRoles }) {
  const { isAuthenticated, isLoading, account } = useSelector(state => state.auth);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (account.role != 'user') {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
