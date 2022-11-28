import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { feedback } from "../constants";
import styles from "../style";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      className={`${styles.paddingY} flex md:flex-row flex-col justify-center md:px-[120px] px-[20px] bg-white`}
    >
      {/* {inView ? (
        <span className="fixed top-0 text-primary">in view</span>
      ) : (
        <span className="fixed top-0 text-danger">not in view</span>
      )} */}
      <div className="text-center w-full mx-auto">
        <h2 className={`${styles.heading2} text-[25px] text-dark`}>
          What Our Client Says
        </h2>
        <div className="md:w-[200px] w-[40%] mx-auto border-b-4 border-primary rounded-lg"></div>
        <motion.div className="w-full flex md:flex-row flex-col justify-between content-center my-9">
          {feedback.map((card) => (
            <TestimonialCard key={card.id} {...card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
