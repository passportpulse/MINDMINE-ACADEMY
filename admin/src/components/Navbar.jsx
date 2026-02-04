import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Navbar({ token, setToken }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
    toast.success("Logged out successfully!");

    setTimeout(() => {
      navigate("/", { replace: true });
    }, 400);
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Mindmine Admin</div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={`navbar-links ${open ? "open" : ""}`}>
        {token ? (
          <>
            <Link to="/dashboard/enquiry" onClick={closeMenu}>Enquiry</Link>
            <Link to="/dashboard/application" onClick={closeMenu}>Applications</Link>
            <Link to="/dashboard/notice" onClick={closeMenu}>Upload Notice</Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" onClick={closeMenu}>Login</Link>
            {/* <Link to="/register" onClick={closeMenu}>Signup</Link> */}
          </>
        )}
      </div>
    </nav>
  );
}
