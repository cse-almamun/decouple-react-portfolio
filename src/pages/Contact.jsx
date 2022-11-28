import React, { Fragment, useEffect } from "react";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactForm from "../components/ContactForm";
import { contact } from "../constants";

const Contact = () => {
  return (
    <Fragment>
      <TopNavbar />
      <div className="container h-ful mx-auto text-center">
        <div className="w-full md:p-11 p-4">
          {/* Section Title */}
          <div className="flex flex-col justify-center">
            <h1 className="text-primary text-4xl font-semibold">
              Get in touch!
            </h1>
            <p className="text-medium font-semibold pt-4 pb-6">
              Contact us for the quotes. We are available 24/7.
            </p>
          </div>
          {/* Contact Method */}
          {/* flex flex-col md:flex-row mx-auto justify-center content-center align-middle md:justify-around */}
          <div className="w-full grid md:grid-cols-3 grid-cols-1 mx-auto gap-10 align-middle px-4">
            {/* flex-1 my-6 p-6 max-w-sm mx-4 bg-white rounded-xl shadow-lg flex flex-col flex-4 basis-3/3 md:basis-1/3 items-center justify-center */}
            <div className="grid h-full place-items-center mx-auto p-6 max-w-sm bg-white rounded-xl shadow-lg space-x-4 hover:bg-primary cursor-pointer hover:text-white w-full">
              <div className="flex-1 flex-row justify-center">
                <MapPinIcon className="h-8 w-8" />
              </div>
              <p className="py-3 text-lg font-medium">{contact.office}</p>
            </div>
            <div className="grid h-full place-items-center mx-auto p-6 max-w-sm bg-white rounded-xl shadow-lg space-x-4 hover:bg-primary cursor-pointer hover:text-white w-full">
              <div className="flex-1 flex-row justify-center">
                <PhoneIcon className="h-8 w-8" />
              </div>
              <p className="py-3 text-lg font-medium">{contact.phone}</p>
            </div>
            <div className="grid h-full place-items-center mx-auto p-6 max-w-sm bg-white rounded-xl shadow-lg space-x-4 hover:bg-primary cursor-pointer hover:text-white w-full">
              <div className="flex flex-auto flex-row justify-center">
                <EnvelopeIcon className="h-8 w-8" />
              </div>
              <p className="py-3 text-lg font-medium">{contact.email}</p>
            </div>
          </div>

          {/* Contact Form  */}

          <ContactForm />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
