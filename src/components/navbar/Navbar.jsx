import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar container">
        <div className="navbar__wrapper">
          <div className="navbar__logo">
            <img src="" alt="app-logo"></img>
          </div>
          <ul className="navbar-items">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `navbar-item ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `navbar-item ${isActive ? "active" : ""}`
                }
              >
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `navbar-item ${isActive ? "active" : ""}`
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
