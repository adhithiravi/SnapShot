import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cars">Cars</NavLink>
        </li>
        <li>
          <NavLink to="/plant">Plants</NavLink>
        </li>
        <li>
          <NavLink to="/bird">Birds</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
