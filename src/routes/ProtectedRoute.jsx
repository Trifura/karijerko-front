import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingPage from "../core/components/LoadingPage.jsx";

export default function ProtectedRoute({ children }) {
  const {isAuthenticated, isLoading} = useSelector(state => state.auth);

  if (isLoading) {
    return <LoadingPage />
  }

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />
  }

  return <>{children}</>
}
