/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleGalleryItem from "./SingleGalleryItem";

const FetchGalleryLoad = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [index, setIndex] = useState(1);

  const getDataHandler = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`
    );
    setGalleryData(response.data);
  };

  useEffect(() => {
    getDataHandler();
  }, [index]);

  let printGalleryData = (
    <h2 className="text-white text-4xl font-semibold text-center my-7">
      Loading Data...
    </h2>
  );

  if (galleryData.length > 0) {
    printGalleryData = galleryData.map((item) => (
      <SingleGalleryItem galleryItem={item} />
    ));
  }

  const prevDataHandler = () => {
    if (index > 1) {
      setIndex(index - 1);
      setGalleryData([]);
    }
  };

  const nextDataHandler = () => {
    setGalleryData([]);
    setIndex(index + 1);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {printGalleryData}
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={prevDataHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Prev
        </button>
        <h4 className="text-white text-[16px] font-medium">Page {index}</h4>
        <button
          className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={nextDataHandler}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FetchGalleryLoad;
