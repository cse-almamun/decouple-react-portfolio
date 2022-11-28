import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import styles from "../style";
import { commitments } from "../constants";
import CommitementCard from "./CommitementCard";

const Commitment = () => {
  return (
    <section
      className={`${styles.paddingY} flex md:flex-row flex-col justify-center md:px-[120px] px-[20px] bg-white`}
    >
      <div className="text-center w-full mx-auto">
        <h2 className={`${styles.heading2} text-[25px] text-dark`}>
          Our Promises
        </h2>
        <div className="md:w-[200px] w-[40%] mx-auto border-b-4 border-primary rounded-lg"></div>
        <div
          className={`${styles.paddingY} flex md:flex-row flex-col justify-between text-center`}
        >
          {commitments.map((commitment) => (
            <CommitementCard key={commitment.id} {...commitment} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
