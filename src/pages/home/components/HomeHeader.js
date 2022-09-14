import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="jof-home-header">
      <div className="jof-home-header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Better Place Living</span>
        </h1>

        <a
          as={Link}
          href="/about-us"
          className="jof-btn jof-btn__white jof-btn__animated"
        >
          Discover More
        </a>
      </div>
    </header>
  );
};

export default HomeHeader;
