import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const SecureRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (users) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default SecureRoute;
