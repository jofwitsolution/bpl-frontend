import React from "react";
import Meta from "../../components/Meta";
import OurServicesHeader from "./components/OurServicesHeader";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

const OurServices = () => {
  return (
    <>
      <Meta title={"Our Services | BPL"} />
      <OurServicesHeader />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default OurServices;
