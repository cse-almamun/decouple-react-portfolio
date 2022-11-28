import React, { Fragment, useEffect, useState } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";
import { useSelector } from "react-redux";
import { Carousel, Modal } from "flowbite-react";
import styles from "../style";
import ContactForm from "../components/ContactForm";
const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState();
  const [show, setShow] = useState(false);
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    let product = products.find((product) => product.slug === slug);
    setProduct(product);
  }, [slug, products]);
  return (
    <Fragment>
      <TopNavbar />
      {product && (
        <div className="relative w-full h-full md:px-[120px] px-[20px] py-6">
          <div className="flex md:flex-row flex-col">
            <div className="flex-1">
              <div className="h-60 sm:h-72 xl:h-80 2xl:h-96">
                <Carousel slide={false}>
                  {product.images.map((item) => (
                    <img key={item.id} src={item.src} alt="..." />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="flex-1 px-6 md:py-0 py-3">
              <div className="">
                <h1 className="text-[30px] text-black">{product.name}</h1>

                {product.in_stock ? (
                  <h3 className="text-primary text-[22px] font-semibold">
                    In Stock
                  </h3>
                ) : (
                  <h3 className="text-danger text-[22px] font-semibold">
                    Out of Stock
                  </h3>
                )}

                <div className={`${styles.paragraph} mt-3`}>
                  {parse(product.short_description)}
                </div>
                <div className="my-6">
                  <button
                    className="bg-primary text-white md:text-[20px] text-[18px] px-6 py-3 font-semibold"
                    onClick={() => setShow(true)}
                  >
                    Get the Quotes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-7">
            <div className="text-center w-full mx-auto">
              <h2 className={`text-[28px] text-black`}>Product Details</h2>
              <div className="w-[150px] mx-auto border-b-4 border-primary rounded-lg"></div>
            </div>
          </div>
          <div>{parse(product.description)}</div>
        </div>
      )}

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

      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
