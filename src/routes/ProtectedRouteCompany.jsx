import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteCompany({ children }) {
  const { isAuthenticated, account } = useSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />
  }

  if (account?.role === 'user') {
    return <Navigate to={"/feed"} replace />;
  }

  return <>{children}</>;
}
