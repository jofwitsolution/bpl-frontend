import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid py-2 jof-header-nav-container">
        <a className="navbar-brand ms-5" href="/">
          <img
            src="img/logo-white.png"
            alt="logo"
            width="60"
            height="46"
            className="d-inline-block align-text-top"
          />
        </a>
        <div className="jof-header-nav me-5">
          <NavLink
            className={({ isActive }) =>
              isActive ? "jof-header-nav__active" : undefined
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "jof-header-nav__active" : undefined
            }
            to="/about-us"
          >
            About us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "jof-header-nav__active" : undefined
            }
            to="/our-services"
          >
            Our services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "jof-header-nav__active" : undefined
            }
            to="/contact-us"
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
