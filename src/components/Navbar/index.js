import React from "react";
import "./style.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <ul className="nav nav-tabs bg-dark text-align-center">
      <li className="nav-item">
        <NavLink
          to="/kb-portfolio"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/kb-portfolio/projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/kb-portfolio/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
     );
}

export default Navbar;
