import React from "react";

const SectionTwo = () => {
  return (
    <section className="container-fluid jof-about-us__sect-2">
      <div className="jof-about-us__sect-2-header">
        <h2 className="jof-heading-tertiary-green">Our Aims and Objectives</h2>
      </div>

      <div className="container jof-about-us__sect-2-container">
        <div className="row justify-content-between align-items-center jof-about-us__row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card jof-about-us__sect-2-card">
              <img src="img/bpl-18.jpg" className="card-img-top" alt="Caring" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Caring</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card jof-about-us__sect-2-card">
              <img
                src="img/bpl-20.jpg"
                className="card-img-top"
                alt="Reliable"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Reliable</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card jof-about-us__sect-2-card">
              <img
                src="img/bpl-19.jpg"
                className="card-img-top"
                alt="Responsive"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Responsive</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="card jof-about-us__sect-2-card">
              <img
                src="img/bpl-17.jpg"
                className="card-img-top"
                alt="Transparent"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Transparent</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <p className="jof-paragraph-1">
            The closest thing to being cared for is to care for someone else, at
            a Better living place our team takes a proactive approach to make
            sure we are delivering our service with our customer’s best interest
            in mind.
          </p>
          <p className="jof-paragraph-1">
            Reliability is critical in our quest for success, we only make
            promises we can keep and you can count on us to make sure we are
            there when you need us the most.
          </p>
          <p className="jof-paragraph-1">
            We have a flexible service that is responsive to changing needs of
            our customers
          </p>
          <p className="jof-paragraph-1">
            Our honest and transparent approach makes us valuable; we are a
            trusted organization with transparency always at the forefront.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
