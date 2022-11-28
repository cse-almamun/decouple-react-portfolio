import React from "react";
import { Link } from "react-router-dom";
const ProuductCard = ({ product }) => {
  const { name, slug, images } = product;

  return (
    <Link to={`/product/${slug}`}>
      <div
        layout
        whileHover={{
          scale: 1.05,
          transition: {
            duration: 0.8,
          },
        }}
        className="grid h-fulll place-items-center"
      >
        <div className="max-w-sm m-3 shadow-lg flex flex-col justify-center content-center align-middle  items-center ">
          <div className="shrink-0">
            {images &&
              images
                .slice(0, 1)
                .map((image) => (
                  <img
                    key={image.id}
                    src={image.src}
                    className="object-cover  h-[350px] w-auto"
                    alt={image.name}
                  />
                ))}
          </div>
          <div>
            <div className="text-center text-lg font-medium text-black py-4">
              {name.slice(0, 30)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProuductCard;
