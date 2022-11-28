import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import productSlice from "./features/productSlice";
let initialState = {};
let store = configureStore(
  {
    reducer: {
      products: productSlice,
    },
  },
  initialState
);

setupListeners(store.dispatch);

export default store;
