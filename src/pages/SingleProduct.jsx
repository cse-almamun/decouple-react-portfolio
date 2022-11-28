import React, { Fragment } from "react";
import Footer from "../components/footer/Footer";
import TopNavbar from "../components/navbar/TopNavbar";

const SingleProduct = () => {
  return (
    <Fragment>
      <TopNavbar />
      <div className="container h-ful mx-auto text-center">
        <Footer />
      </div>
    </Fragment>
  );
};

export default SingleProduct;
