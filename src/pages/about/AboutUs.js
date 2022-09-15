import React from "react";
import Meta from "../../components/Meta";
import AboutUsHeader from "./components/AboutUsHeader";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

const AboutUs = () => {
  return (
    <>
      <Meta title={"About Us | BPL"} />
      <AboutUsHeader />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default AboutUs;
