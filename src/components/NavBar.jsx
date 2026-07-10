import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark shadow-sm"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container">

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">

            <li className="nav-item mx-3">
              <Link
                className="nav-link text-white fw-bold fs-5"
                to="/"
              >
                Add Employee
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link
                className="nav-link text-white fw-bold fs-5"
                to="/view"
              >
                View Employee
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link
                className="nav-link text-white fw-bold fs-5"
                to="/search"
              >
                Search Employee
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link
                className="nav-link text-white fw-bold fs-5"
                to="/delete"
              >
                Delete Employee
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;