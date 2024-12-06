import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

// eslint-disable-next-line react/prop-types
const SecureRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (users) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default SecureRoute;
