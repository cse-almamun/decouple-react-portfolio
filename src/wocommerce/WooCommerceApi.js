export const data = {
  url: import.meta.env.VITE_API_URL,
  consumerKey: import.meta.env.VITE_CONSUMER_KEY,
  consumerSecret: import.meta.env.VITE_CONSUMER_SECRET,
  version: import.meta.env.VITE_WC_VERSION,
  queryStringAuth: true,
};

//amaratlimited.com/wp-json/wc/v3/products?consumer_key=ck_88906a31c0db705a48ebf13aa3b1ecb418b98347&consumer_secret=cs_309ab0476c03f42edd4a8282e93e838b22de8e83

export const fetchProductsURL =
  data.url +
  "wp-json/" +
  data.version +
  "/products?consumer_key=" +
  data.consumerKey +
  "&consumer_secret=" +
  data.consumerSecret;

export const fetchSingleProductURL = (id) => {
  reutrn(
    data.url +
      "wp-json/" +
      data.version +
      "/products/" +
      id +
      "?consumer_key=" +
      data.consumerKey +
      "&consumer_secret=" +
      data.consumerSecret
  );
};
