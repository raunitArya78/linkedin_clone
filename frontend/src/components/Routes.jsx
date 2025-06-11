import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./src/components/Login";
import Home from "./src/components/Home";
import Recruiter_Home from "./src/components/Recruiter_Home";
import PrivateRoute from "./src/components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoute allowedRoles={["jobseeker"]}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/recruiter-home"
          element={
            <PrivateRoute allowedRoles={["recruiter"]}>
              <Recruiter_Home />
            </PrivateRoute>
          }
        />

        {/* Add more protected routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
