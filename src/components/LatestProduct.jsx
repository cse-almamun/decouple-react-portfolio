import React, { useEffect } from "react";
import styles from "../style";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const LatestProduct = () => {
  //redux get data
  const { isLoading, products, error } = useSelector((state) => state.products);

  return (
    <section className={`${styles.paddingY} relative bg-white`}>
      <div className="text-center w-full mx-auto">
        <h2 className={`${styles.heading2} text-[25px] text-black`}>
          Latest Product's
        </h2>
        <div className="md:w-[200px] w-[40%] mx-auto border-b-4 border-primary rounded-lg"></div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-1 md:px-[120px] px-[20px] mt-7">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
