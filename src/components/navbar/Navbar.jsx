import { NavLink } from "react-router-dom";
import { navLinks } from "../navbar/NavbarData";
import logo from "../../assets/logo-white.svg";
import "../../styles/navbar.css";
import { useRef } from "react";

export default function Navbar() {
  const collapseRef = useRef(null); // reference to collapse div

  const handleNavClick = () => {
    // If collapse is open, close it
    const collapseEl = collapseRef.current;
    if (collapseEl.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(collapseEl, {
        toggle: true
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">
        {/* Logo + Brand */}
        <NavLink to="/" className="brand d-flex align-items-center gap-2">
          <img src={logo} alt="Mindmine Academy" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-mindmine">MINDMINE</span>
            <span className="brand-academy">ACADEMY</span>
          </div>
        </NavLink>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={collapseRef} // assign ref here
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navLinks.map(({ label, path }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${label.toLowerCase() === "apply now" ? "apply-btn" : ""} ${isActive ? "active-link" : ""}`
                  }
                  onClick={handleNavClick} // ← collapse on click
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
