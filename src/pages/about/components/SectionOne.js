import React from "react";

const SectionOne = () => {
  return (
    <section className="jof-about-us__sect-1 container-fluid">
      <div className="container jof-about-us__sect-1-container">
        <div className={`jof-about-us__sect-1__div-1`}>
          <h4 className="jof-about-us__sect-1__text-sub">
            BETTER PLACE LIVING
          </h4>
          <h2 className="jof-about-us__sect-1__text-main jof-heading-secondary-black">
            ABOUT US
          </h2>
        </div>
        <div className="jof-about-us__sect-1__div-2">
          <p className="jof-paragraph-1 u-margin-bottom-small">
            We were founded in 2022, we are an LTD company on a mission to make
            difference. Our team is made up of passionate people who care about
            offering a service that comes from the heart.
          </p>
          <p className="jof-paragraph-1 u-margin-bottom-small">
            We run a variety of services across the UK, the ultimate aim to
            build independence through your aspiration, enabling our customers
            to be part of their community so that they live and feel connected
            to society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
