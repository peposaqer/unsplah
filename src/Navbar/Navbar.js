import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header
      className={`navbar navbar-expand-lg center-nav transparent navbar-dark caret-none en`}
    >
      <div className="container">
        <div className="nav-top">
          <div>
            <ul className="navbar-nav nav-hide e">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active nav-link fromRight"
                      : "nav-link fromRight"
                  }
                >
                  Next
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/PaginationItems"
                  className={({ isActive }) =>
                    isActive
                      ? "active nav-link fromRight"
                      : "nav-link fromRight"
                  }
                >
                  Pagination
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Load"
                  className={({ isActive }) =>
                    isActive
                      ? "active nav-link fromRight"
                      : "nav-link fromRight"
                  }
                >
                  Load
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Loading"
                  className={({ isActive }) =>
                    isActive
                      ? "active nav-link fromRight"
                      : "nav-link fromRight"
                  }
                >
                  Endless Scrolling
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/Search"
                  className={({ isActive }) =>
                    isActive
                      ? "active nav-link fromRight"
                      : "nav-link fromRight"
                  }
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
