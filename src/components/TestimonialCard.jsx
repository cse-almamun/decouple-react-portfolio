import React from "react";
const TestimonialCard = ({ img, name, title, content }) => {
  return (
    <div className="flex-1 bg-dimWhite flex shadow-lg flex-col m-4 p-10 rounded-lg hover:bg-primary hover:text-white cursor-pointer">
      <div className="flex flex-row justify-center align-middle content-centerw-full">
        <img
          src={img}
          className="grid place-items-center md:h-[100px] md:w-[100px] h-[75px] w-[75px]"
          alt="feedback card"
        />
        <div className="flex flex-col justify-center align-middle content-center">
          <span className="md:text-[25px] text-[20px] px-5 m-0">
            {name} <br />
          </span>
          <span className="m-0 p-0 font-thin"> {title}</span>
        </div>
      </div>
      <p className={`font-normal pt-7`}>
        <span></span>
        {content}
      </p>
    </div>
  );
};

export default TestimonialCard;
