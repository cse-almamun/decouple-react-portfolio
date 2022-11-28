import React, { Fragment } from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";

const About = () => {
  return (
    <Fragment>
      <TopNavbar />
      <AboutUs />
      <Footer />
    </Fragment>
  );
};

export default About;
