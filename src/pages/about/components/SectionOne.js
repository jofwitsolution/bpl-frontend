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
            We were founded in 2022. An LTD company on a mission to make a
            difference. Our team is made up of passionate people who care about
            offering a service that comes from the heart. We run various
            services across the UK, from providing care and support to those in
            need or providing affordable rented accommodation for those most in
            need.
          </p>
          <p className="jof-paragraph-1 u-margin-bottom-small">
            The ultimate aim is to build independence through aspirations. We
            support our customers to develop core living skills, enabling our
            customers to be part of a community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
