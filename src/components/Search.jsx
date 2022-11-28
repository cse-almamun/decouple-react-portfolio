import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../style";

const Search = ({ params }) => {
  const [filter, setFilter] = useSearchParams();
  const [searchValue, setSearchValue] = useState(params);
  return (
    <section className={`${styles.paddingY} md:px-[120px] px-[20px]`}>
      <div className="text-center w-full mb-7 mx-auto">
        <h2 className={`${styles.heading2} text-[25px] text-black`}>Search Product's</h2>
        <div className="md:w-[200px] w-[40%] mx-auto border-b-4 border-primary rounded-lg"></div>
      </div>
      <div className="flex flex-row justify-center content-center">
        <input
          type="text"
          className="form-input px-4 py-2 border-0 rounded hover:shadow-lg focus:shadow-lg focus:border-primary focus:ring-primary  w-[420px]"
          placeholder="search product"
          value={searchValue !== "null" ? searchValue : ""}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="mx-4 bg-primary text-white px-6 rounded hover:shadow-lg"
          onClick={() => setFilter({ search: searchValue })}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
