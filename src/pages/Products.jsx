import React, { Fragment, useEffect, useState } from "react";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import TopNavbar from "../components/TopNavbar";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const Products = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const filter = searchQuery.get("search");
  const { isLoading, products, error } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  useEffect(() => {
    if (filter && filter !== null) {
      if (filter === "null") {
        setSearchQuery({});
      }
      let filtered = products.filter((item) => {
        if (
          item.name.toLowerCase().includes(filter) ||
          item.short_description.includes(filter)
        ) {
          return item;
        }
      });
      setFilteredProducts(filtered);
    } else {
      setSearchQuery({});
      setFilteredProducts(products);
    }
  }, [filter]);

  return (
    <Fragment>
      <TopNavbar />
      <Search params={filter} />
      <motion.div className="bg-white pt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-1 md:px-[120px] px-[20px]">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </motion.div>

      <Footer />
    </Fragment>
  );
};

export default Products;
