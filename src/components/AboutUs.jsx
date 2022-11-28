import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { aboutCompany } from "../assets/img";
import styles from "../style";
const AboutUs = () => {
  return (
    <Fragment>
      <section
        className={`${styles.paddingY} flex md:flex-row flex-col justify-center md:p-[120px] p-[20px]`}
      >
        <div className="flex md:flex-row flex-col justify-between w-full">
          <div className="flex-1 flex flex-col justify-center content-center align-middle text-center w-full p-4">
            <div className="text-center w-full mx-auto pb-4">
              <h2 className={`${styles.heading2} text-[25px] text-dark`}>
                Who we are?
              </h2>
              <div className="md:w-[200px] w-[40%] mx-auto border-b-4 border-primary rounded-lg"></div>
            </div>
            <p className={`${styles.paragraph}`}>
              We started our journey just producing Black Seeds Oil. And loved
              by most of the people beacuse of purity. That inspired us to work
              with organic product. Then we expand our business. Now producing
              orgnaic{" "}
              <b>
                Mustard Oil, Coconut Oil, Natural Raw Honey, Peanut Oil, Black
                Tea, Black Cumin Powder, Turmeric Powder
              </b>{" "}
              and many more. Explore our organic product{" "}
              <Link to="/products" className="text-primary">
                here
              </Link>
              .
            </p>
          </div>
          <div className="md:block hidden flex-1 flex-col justify-center content-center align-middle w-full">
            <img src={aboutCompany} alt="about-company" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
