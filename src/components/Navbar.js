import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="jof-navigation">
      <input
        type="checkbox"
        className="jof-navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="jof-navigation__button">
        <span className="jof-navigation__icon">&nbsp;</span>
      </label>

      <div className="jof-navigation__background">&nbsp;</div>

      <nav className="jof-navigation__nav">
        <ul className="jof-navigation__list">
          <li className="jof-navigation__item">
            <a as={Link} href="/" className="jof-navigation__link">
              <span className="jof-navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              Home
            </a>
          </li>
          <li className="jof-navigation__item">
            <a as={Link} href="/about-us" className="jof-navigation__link">
              <span className="jof-navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              About BPL
            </a>
          </li>
          <li className="jof-navigation__item">
            <a as={Link} href="/our-services" className="jof-navigation__link">
              <span className="jof-navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              Our Services
            </a>
          </li>
          <li className="jof-navigation__item">
            <a as={Link} href="/contact-us" className="jof-navigation__link">
              <span className="jof-navigation__link-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
