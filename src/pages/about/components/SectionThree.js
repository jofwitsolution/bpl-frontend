import React from "react";

const SectionThree = () => {
  return (
    <section className="container-fluid jof-about-us__sect-3">
      <div className="container jof-about-us__sect-3-container">
        <div className="jof-about-us__sect-3-header">
          <h2 className="jof-heading-tertiary-green">Why Choose Us?</h2>
        </div>
        <p className="jof-paragraph-1">
          We pride ourselves on offering outstanding care, we offer our service
          to our clients to make a positive difference in today's world of care
        </p>
        <div className="row justify-content-between align-items-center jof-about-us__sect-3-row">
          <div className="col-12 col-md-6 jof-about-us__sect-3-col-1">
            <ul className="jof-about-us__sect-3-list jof-paragraph-1">
              <li className="jof-about-us__sect-3-list-item">
                Our outstanding staff recruitment program, our experienced HR
                department ensures employees are trained and prepared for the
                challenging tasks and obstacles that appeal to the specific
                role.
              </li>
              <li className="jof-about-us__sect-3-list-item">
                We value trust and professionalism. We ensure all staff carry an
                Enhanced and up-to-date DBS check and complete all significant
                training.
              </li>
              <li className="jof-about-us__sect-3-list-item">
                At a Better living place, we aim for the sky to meet living
                standards and follow key lines of inquiry as the CQC fundamental
                standards set out.
              </li>
              <li className="jof-about-us__sect-3-list-item">
                our team has several years of experience within the care sector
                so our focus surrounds enabling and encouraging our clients to
                live independently…of course with a little helping hand from us.
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="img/bpl-7.jpg"
              alt="Why choose us"
              className="img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
