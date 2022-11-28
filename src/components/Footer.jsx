import React, { useEffect } from "react";
import styles from "../style";
import { socialMedia } from "../constants";
import { contact } from "../constants";
const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} relative bottom-0 w-full bg-black md:px-[120px] px-[20px] flex-col mx-auto`}
    >
      {/* Footer Top Section */}
      <div
        className={`${styles.flexCenter} flex  md:flex-row flex-col justify-center content-center mb-8 w-full`}
      >
        <div className="flex flex-col justify-center text-center md:mr-10 mr-0">
          <h1 className={`${styles.heading2} text-[25px] text-white`}>
            Let's Connect!
          </h1>
          <p className={`font-lg text-white font-thin`}>
            Stay connected with Amarat Limited just subscribing our Newsletter.
          </p>

          <div className="py-6 relative">
            <input
              type="text"
              className="form-input px-4 py-3 rounded-full focus:border-primary focus:ring-primary  w-full"
              placeholder="example@mail.com"
            />
            <button className="bg-primary text-white px-[39px] py-1 rounded-full text-[25px] font-semibold md:absolute relative md:left-[75%] md:top-[27%] my-4 md:my-0">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-nunito font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ {new Date().getFullYear()} Amarat Limited. All Rights
          Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
