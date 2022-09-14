import React from "react";
import SvgHome from "../../../components/svg/SvgHome";
import SvgOffice from "../../../components/svg/SvgOffice";
import SvgUsers from "./../../../components/svg/SvgUsers";

const SectionTwo = () => {
  return (
    <section className="jof-home__sect-2 container-fluid">
      <div className="container jof-home__sect-2-container">
        <div className="u-center-text u-margin-bottom-medium">
          <h2
            className="heading-secondary u-margin-bottom-small"
            id="our-services"
          >
            Explore our types of support
          </h2>
        </div>
        <div className="card-group jof-home__sect-2-card-group">
          <div className="card jof-home__sect-2-card">
            <div className="text-center p-4 pt-5">
              <SvgOffice />
            </div>
            <div className="card-body p-4">
              <h3 className="card-title mb-3 jof-heading-quaternary-black u-center-text">
                Our Housing
              </h3>
              <p className="card-text text-center">
                We offer a home-to-home service. Our homes are safe, warm, and
                welcoming for young adults and older people alike.
              </p>
            </div>
            <div className="card-footer jof-home__sect-2-card-footer">
              {" "}
              <small className="jof-home__sect-2-read-more">
                {" "}
                <a href="/our-services">Read more...</a>
              </small>
            </div>
          </div>
          <div className="card jof-home__sect-2-card">
            <div className="text-center p-4 pt-5">
              <SvgUsers />
            </div>
            <div className="card-body p-4">
              <h3 className="card-title mb-3 jof-heading-quaternary-black u-center-text">
                {" "}
                Community and Development Services
              </h3>
              <p className="card-text text-center">
                We will concentrate on developing our customer skills to remain
                independent or gain independence.
              </p>
            </div>
            <div className="card-footer jof-home__sect-2-card-footer">
              {" "}
              <small className="jof-home__sect-2-read-more">
                {" "}
                <a href="/our-services">Read more...</a>
              </small>
            </div>
          </div>
          <div className="card jof-home__sect-2-card">
            <div className="text-center p-4 pt-5">
              <SvgHome />
            </div>
            <div className="card-body p-4">
              <h3 className="card-title mb-3 jof-heading-quaternary-black u-center-text">
                {" "}
                Supported Accommodation
              </h3>
              <p className="card-text text-center">
                We provide comfortable accommodation. With support from our
                team, customers will be mentored by our team of highly skilled
                professionals so that they can reach their full potential.
              </p>
            </div>
            <div className="card-footer jof-home__sect-2-card-footer">
              {" "}
              <small className="jof-home__sect-2-read-more">
                {" "}
                <a href="/our-services">Read more...</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
