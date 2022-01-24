import * as auth from "../utils/auth";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  return auth.checkToken() ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
