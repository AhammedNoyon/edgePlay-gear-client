import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const SecureRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  if (users) {
    return children;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default SecureRoute;
