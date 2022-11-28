import { Modal } from "flowbite-react";
import React, { useState } from "react";
import { blackSesameOil, hero } from "../assets/img";
import ContactForm from "./ContactForm";
import styles from "../style";
const Hero = () => {
  const [show, setShow] = useState(false);

  return (
    <section
      className={`flex md:flex-row flex-col justify-between object-center h-auto w-full pb-5`}
    >
      <div className="w-auto flex-2 flex-col hidden md:block">
        <img
          src={hero}
          className="md:h-[620px] md:w-full w-auto m-0"
          alt="hero-image"
        />
      </div>
      <div className="flex-1 flex-col md:relative md:top-32 md:right-[22%]  sm:px-20 md:px-0  lg:px-0 px-10 top-0 right-0">
        <div className="flex flex-col">
          <h1
            className={`${styles.heading2} text-[25px] font-normal text-dark`}
          >
            <span className="text-primary">Organic,</span> and Refined
          </h1>
          <h1 className="md:text-[30px] text-[22px] font-light">
            Extra Virgin Olive Oil
          </h1>
          <p className={`${styles.paragraph}  py-4`}>
            Black seed oil is high in antioxidants — plant compounds that help
            protect cells against damage caused by unstable molecules called
            free radicals. Black seed oil has also been studied for its
            potential effectiveness in reducing blood pressure and cholesterol
            levels.
          </p>
        </div>
        <div className="md:mx-auto">
          <button
            className="bg-primary text-white py- rounded-md text-lg font-semibold px-8 py-2 w-auto md:float-right mx-auto"
            onClick={() => setShow(true)}
          >
            Get Quotes
          </button>
        </div>
      </div>
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

export default Hero;
