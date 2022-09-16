import React from "react";

const SectionThree = () => {
  return (
    <section className="jof-our-services__sect-1 container-fluid">
      <div className="jof-our-services__sect-1-container container">
        <div className="jof-our-services__sect-1-row row justify-content-between align-items-center">
          <div className="jof-our-services__sect-1-col col-12 col-md-6">
            <div className="jof-our-services__sect-1-text-sub">
              <h4 className="">BETTER PLACE LIVING</h4>
            </div>
            <div className="jof-our-services__sect-1-text-main">
              <h3 className="jof-heading-tertiary-black">
                Community and Development Service
              </h3>
            </div>
            <div className="jof-paragraph-1 jof-our-services__sect-1-paragraph">
              We will concentrate on developing our customer skills to remain
              independent or gain independence. We communicate with our
              customers and other professional agency ensuring that our
              customers have every opportunity to access information and
              education resources that will eventually lead them to sustain good
              jobs within their community. we liaise with external professional
              agencies to ensure all customers receive the best support in
              gaining control of their lives. We will work with the local
              authority, education institutions, and various charities so that
              you reach your full potential, no task is too small for our team
              of professionals.
            </div>
          </div>
          <div className="jof-our-services__sect-1-col col-12 col-md-6">
            <img
              src="img/bpl-10.jpg"
              alt="Community Development Service"
              className="img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
