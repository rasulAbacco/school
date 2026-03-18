import "./App.css";
import { getAuth } from "./auth/storage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminRoutes from "./admin/Routes";
import StudentRoutes from "./student/Routes";
import SuperAdminRoutes from "./superAdmin/Routes";
import TeacherRoutes from "./teacher/Routes";
import ParentRoutes from "./parent/Routes";
import Finance from "./finance/Routes";

function App() {
  const [view, setView] = useState("login");
  const auth = getAuth();

  if (!auth) {
    if (view === "register") {
      return <Register onSwitchToLogin={() => setView("login")} />;
    }
    return <Login onSwitchToRegister={() => setView("register")} />;
  }

  return (
    <Routes>

      <Route path="/student/*" element={<StudentRoutes />} />

      <Route path="/parent/*" element={<ParentRoutes />} />

      <Route path="/super-admin/*" element={<SuperAdminRoutes />} />

      <Route path="/admin/*" element={<AdminRoutes />} />

      <Route path="/teacher/*" element={<TeacherRoutes />} />

      <Route path="/finance/*" element={<Finance />} />

      {/* Default redirect based on role */}
      {auth.accountType === "parent" && (
        <Route path="*" element={<Navigate to="/parent/dashboard" replace />} />
      )}

      {auth.accountType === "student" && (
        <Route path="*" element={<Navigate to="/student/dashboard" replace />} />
      )}

    </Routes>
  );
}

export default App;