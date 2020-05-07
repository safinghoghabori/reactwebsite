import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="" className="brand-logo">
            React-Redux
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
