import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteUser({ children }) {
  const { isAuthenticated, account } = useSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />
  }
  if (account?.role === 'company') {
    return <Navigate to={"/dashboard"} replace />;
  }

  return <>{children}</>;
}
