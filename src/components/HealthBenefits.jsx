import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import {
  blackCuminSeedOil,
  blackSeedOil,
  youngLadyExercising,
} from "../assets/img";
import styles from "../style";
import ContactForm from "./ContactForm";

const HealthBenefits = () => {
  const [show, setShow] = useState(false);

  return (
    <section
      className={`${styles.paddingY} w-full flex md:flex-row flex-col justify-center md:px-[120px]`}
    >
      <div className="flex-1 w-full">
        <div className="grid place-items-center px-4">
          <img src={youngLadyExercising} className="" alt="women-meditation" />
        </div>
      </div>
      <div className="flex-1 w-full px-4">
        <div
          layout
          className="grid w-full h-full place-items-center md:place-content-start"
        >
          <div
            className={`md:${styles.heading2} text-center text-[25px] text-dark`}
          >
            Black Cumin <span className="text-primary">Seed Oil</span>{" "}
          </div>
          <ul
            className={`list-disc p-6 md:text-[22px] text-normal font-normal`}
          >
            <li>100% Organic natural Oil.</li>
            <li>Reduce inflammation and relax smooth muscles.</li>
            <li>Prevent gastrointestinal disorders.</li>
            <li>Reduce high blood pressure.</li>
            <li>Cancer prevention.</li>
            <li>Boosting the immune system.</li>
          </ul>
          <button
            className={`bg-primary w-auto px-10 py-1 text-white md:text-[22px] rounded-lg text-center mx-auto`}
            onClick={() => setShow(true)}
          >
            Get Now
          </button>
        </div>
      </div>

      {/* Get Quotes Form Modal */}
      <Modal
        show={show}
        position="center"
        size="5xl"
        onClose={() => setShow(false)}
      >
        <Modal.Header>Send Quotes Request</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <ContactForm />
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default HealthBenefits;
