import React from "react";
// import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <section className="jof-home__sect-1 conatiner-fluid">
      <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">
          CONNECTING WITH PEOPLE LIKE NEVER BEFORE!
        </h2>
      </div>
      <div className="container jof-home__sect-1-container">
        <div className="row justify-content-between px-2">
          <div className="col-xs-12 col-md-6">
            <p className="jof-paragraph-1">
              At Better place living our key objectives revolve around promoting
              independence. Our role is to give our customers the tools they
              need to get back on their feet. We understand mental health
              matters, so individual well-being is of great importance to us.
              From walks and outgoings to daily house tasks. Such as cleaning
              and cooking, we are always there to offer that extra bit of
              support.
            </p>
            <p className="jof-paragraph-1">
              Our team of professional are dedicated to creating a society where
              vulnerable people can be heard, we work with our customers so that
              our support is led by our customer and their choices.
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="jof-composition ms-3 jof-home__sect-1-composition">
              <img
                srcSet="img/bpl-1.jpg 300w, img/bpl-1-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="bpl-1"
                className="jof-composition__photo jof-composition__photo--p1"
                src="img/bpl-1-large.jpg"
              />

              <img
                srcSet="img/bpl-2.jpg 300w, img/bpl-2-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="bpl-2"
                className="jof-composition__photo jof-composition__photo--p2"
                src="img/bpl-2-large.jpg"
              />

              <img
                srcSet="img/bpl-3.jpg 300w, img/bpl-3-large.jpg 1000w"
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="bpl-3"
                className="jof-composition__photo jof-composition__photo--p3"
                src="img/bpl-3-large.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
