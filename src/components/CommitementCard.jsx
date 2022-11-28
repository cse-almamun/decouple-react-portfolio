import React from "react";
function CommitementCard({ image, title }) {
  return (
    <div className="bg-dimWhite font-semibold flex-1 flex flex-col justify-center items-center p-8 md:mx-3 mb-3 shadow-lg">
      <img
        src={image}
        className=" mb-6 md:h-[50px] md:w-[50px] h-[40px] w-[40px]"
        alt="organic"
      />
      <h2 className="text-[20px] md:text-[28px]">{title}</h2>
    </div>
  );
}

export default CommitementCard;
