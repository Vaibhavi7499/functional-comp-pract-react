import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Employee Mangement System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/userform"}>
                  User Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/userlist"}>
                  User List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/form"}>
                  Form
                </Link>{" "}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/cal"}>
                  Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usestate">
                  useState
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/useeffect">
                  useEffect
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/studentform">
                  Student Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/studentlist">
                  Student List
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/todo">
                  Todo
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/todolist">
                  Todo List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactform">
                  Contact Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactlist">
                  Contact List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counterIncDec">
                  Counter
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
