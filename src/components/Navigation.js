import React from "react";
import { NavLink } from "react-router-dom";

/** TODO Setup nav links */
function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cars">Cars</NavLink>
        </li>
        <li>
          <NavLink to="/plants">Plants</NavLink>
        </li>
        <li>
          <NavLink to="/flowers">Flowers</NavLink>
        </li>
        <li>
          <NavLink to="/food">Food</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
