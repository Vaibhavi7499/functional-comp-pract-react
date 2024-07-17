import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Employee Mangement System
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to={"/userform"}>
                  User Form
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={"/userlist"}>
                  User List
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={"/form"}>
                  Form
                </Link>{" "}
              </li>
              <li class="nav-item">
                <Link className="nav-link" to={"/cal"}>
                  Calculator
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/usestate">
                  useState
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/useeffect">
                  useEffect
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Layout;
