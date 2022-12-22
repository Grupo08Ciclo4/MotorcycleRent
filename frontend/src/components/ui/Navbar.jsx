import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/Logo";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="menu flex container">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Quienes Somos</Link>
          </li>
          <li>
            <Link to="/servics">Servicios</Link>
          </li>
          <li>
            <Link to="/mision">Mision</Link>
          </li>
          <li>
            <Link to="/vision">Vision</Link>
          </li>
          <li>
            <Link to="/">
              <Logo size="60px" />
            </Link>{" "}
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
