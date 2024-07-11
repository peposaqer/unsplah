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
                  activeClassName="active"
                  className="nav-link fromRight"
                >
                  Next
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/PaginationItems"
                  activeClassName="active"
                  className="nav-link fromRight"
                >
                  Pagination
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Load"
                  activeClassName="active"
                  className="nav-link"
                >
                  Load
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Loading"
                  activeClassName="active"
                  className="nav-link"
                >
                  Endless Scrolling
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/Search"
                  activeClassName="active"
                  className="nav-link"
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
