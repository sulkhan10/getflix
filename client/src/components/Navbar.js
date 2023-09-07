import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.png";
import "../index.css";

const Navbar = () => {
  const activeClassName = "text-red-500";
  const inactiveClassname = "hover:text-red-500";

  return (
    <nav className="flex justify-between items-center h-16 bg-gray-900 px-6">
      <Link to="/" className="flex items-center text-white">
        <img src={logo} alt="Netflix" className="h-8" />
      </Link>
      <ul className="flex items-center space-x-4 text-white">
        <li>
          <NavLink
            to="/popular"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassname
            }
          >
            Popular
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/nowplaying"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassname
            }
          >
            Now Playing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toprated"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassname
            }
          >
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              isActive ? activeClassName : inactiveClassname
            }
          >
            Up Coming
          </NavLink>
        </li>
        <li>

      <div className="flex space-x-4 text-white">
        <NavLink
          to="/login"
          className="text-lg font-medium hover:text-red-500"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="text-lg font-medium hover:text-red-500"
        >
          Register
        </NavLink>
      </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
