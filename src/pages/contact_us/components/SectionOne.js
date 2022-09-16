import React from "react";

const SectionOne = () => {
  return (
    <section className="jof-contact-us__sect-1 container-fluid">
      <div className="jof-contact-us__sect-1-container container">
        <div className="jof-contact-us__sect-1-header">
          <h2 className="jof-heading-tertiary-green">CONTACT US</h2>
        </div>
        <div className="jof-contact-us__sect-1-row row justify-content-center-align-items-center">
          <div className="col-12 col-md-6">
            <div className="row">
              <img
                src="img/bpl-24.jpg"
                alt="contact us"
                className="img-fluid"
              />
            </div>
            <div className="row mt-5">
              <h2 className="jof-heading-tertiary-green">for all enquiries</h2>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img
              src="img/bpl-22.png"
              alt="contact us"
              className="img img-fluid jof-contact-us__sect-1-img-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
