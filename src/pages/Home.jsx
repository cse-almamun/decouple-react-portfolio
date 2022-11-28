import React, { Fragment } from "react";
import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import Hero from "../components/Hero";
import { LatestProduct } from "../components/LatestProduct";
import HealthBenefits from "../components/HealthBenefits";
import Commitment from "../components/Commitment";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <Fragment>
      <TopNavbar />
      <Hero />
      <LatestProduct />
      <HealthBenefits />
      <Commitment />
      <AboutUs />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
