import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_tel: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disable, setDisable] = useState(false);
  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    axios
      .post(
        "https://api.amaratlimited.com/wp-json/contact-form-7/v1/contact-forms/26/feedback",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setSuccessMessage(res.data.message);
        setFormData({
          user_name: "",
          user_email: "",
          user_tel: "",
          subject: "",
          message: "",
        });
        setDisable(false);
      })
      .catch((error) => {
        setErrorMessage("Unable to send message");
        setDisable(false);
      });
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      setSuccessMessage("");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      setErrorMessage("");
    }
  }, [successMessage, errorMessage]);

  return (
    <Fragment>
      <form onSubmit={formSubmit} encType="multipart/form-data">
        <div className="flex flex-row justify-between m-5 bg-primary shadow-lg p-8 rounded-xl">
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between md:justify-center w-full">
              <div className="basis-6/12 flex flex-col w-full md:pr-6">
                <div className="flex flex-col text-left mb-3">
                  <label className="text-lg text-white font-semibold pb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-input px-4 py-3 rounded-lg focus:border-primary focus:ring-primary"
                    placeholder="John Smith"
                    value={formData.user_name}
                    onChange={onChange}
                    required
                  ></input>
                </div>
                <div className="flex flex-col text-left mb-3">
                  <label className="text-lg text-white font-semibold pb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-input px-4 py-3 rounded-lg focus:border-primary focus:ring-primary"
                    placeholder="example@mail.com"
                    value={formData.user_email}
                    onChange={onChange}
                    required
                  ></input>
                </div>
                <div className="flex flex-col text-left mb-3">
                  <label className="text-lg text-white font-semibold pb-1">
                    Your Phone
                  </label>
                  <input
                    type="number"
                    name="user_tel"
                    className="form-input px-4 py-3 rounded-lg focus:border-primary focus:ring-primary"
                    placeholder="880xxxxxxxxx"
                    value={formData.user_tel}
                    onChange={onChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="basis-6/12 md:pl-6">
                <div className="flex flex-col text-left mb-3">
                  <label className="text-lg text-white font-semibold pb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input px-4 py-3 rounded-lg focus:border-primary focus:ring-primary"
                    placeholder="Message Subject"
                    value={formData.subject}
                    onChange={onChange}
                    required
                  ></input>
                </div>
                <div className="flex flex-col text-left mb-3">
                  <label className="text-lg text-white font-semibold pb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    className="form-textarea px-4 py-3 rounded-lg resize-none h-[145px] focus:border-primary focus:ring-primary"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={onChange}
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="mx-auto text-center my-5">
              <button
                type="submit"
                className="bg-white text-primary text-xl font-bold py-2 px-6 border rounded"
                disabled={disable}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
