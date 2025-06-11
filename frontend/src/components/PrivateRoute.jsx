import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRoute = ({ children, allowedRoles }) => {
  const [auth, setAuth] = useState({ status: null, role: null });

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/verify`, { withCredentials: true })
      .then(res => {
        if (res.data.status) {
          setAuth({ status: true, role: res.data.user.role });
        } else {
          setAuth({ status: false, role: null });
        }
      })
      .catch(() => setAuth({ status: false, role: null }));
  }, []);

  if (auth.status === null) return <div>Loading...</div>;
  if (!auth.status) return <Navigate to="/login" replace />;

  // RBAC check
  if (!allowedRoles.includes(auth.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
