import React from "react";
import Meta from "./../../components/Meta";
import HomeHeader from "./components/HomeHeader";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

const Home = () => {
  return (
    <>
      <Meta title={"Better Place Living"} />
      <HomeHeader />
      <SectionOne />
      <SectionTwo />
    </>
  );
};

export default Home;
