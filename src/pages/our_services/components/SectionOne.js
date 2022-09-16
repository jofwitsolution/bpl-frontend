import React from "react";

const SectionOne = () => {
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
                Supported Accommodation
              </h3>
            </div>
            <div className="jof-paragraph-1 jof-our-services__sect-1-paragraph">
              We provide comfortable accommodation, with support from our team
              our customers will be mentored by our team of highly skilled
              professionals so that they can reach their full potential. We
              understand that getting back on to your feet can be expensive, so
              our supported accommodation homes come with part furniture, we
              will support you to create a comfortable home suited to your likes
              and needs. We will help with applying for government-funded grants
              to help our customers meet their essential living costs.
            </div>
          </div>
          <div className="jof-our-services__sect-1-col col-12 col-md-6">
            <img
              src="img/bpl-8.jpg"
              alt="Supported accommodation"
              className="img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
