import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Enquiry from "./pages/Enquiry";
import Applications from "./pages/Applications";
import UploadNotice from "./pages/UploadNotice";

// ProtectedRoute must be declared outside App
function ProtectedRoute({ children, token }) {
  if (!token) return <Navigate to="/" replace />;
  return children;
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000} // auto dismiss after 3s
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar token={token} setToken={setToken} />

      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/dashboard/enquiry" replace />
            ) : (
              <Login setToken={setToken} />
            )
          }
        />
        <Route
          path="/register"
          element={
            token ? (
              <Navigate to="/dashboard/enquiry" replace />
            ) : (
              <Signup setToken={setToken} />
            )
          }
        />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard/enquiry"
          element={
            <ProtectedRoute token={token}>
              <Enquiry />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/application"
          element={
            <ProtectedRoute token={token}>
              <Applications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/notice"
          element={
            <ProtectedRoute token={token}>
              <UploadNotice />
            </ProtectedRoute>
          }
        />

        {/* Fallback route */}
        <Route
          path="*"
          element={<Navigate to={token ? "/dashboard/enquiry" : "/"} replace />}
        />
      </Routes>
    </>
  );
}

export default App;
