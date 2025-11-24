import React, { useState } from "react";
import axios from "axios";

const GalleryGetData = () => {
  const [galleryData, setGalleryData] = useState([]);

  const getDataHandler = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=15"
    );
    setGalleryData(response.data);
  };

  let printGalleryData = (
    <h2 className="text-white text-4xl font-semibold text-center my-7 w-full">
      Gallery Data Not Available Right Now.
    </h2>
  );

  if (galleryData.length > 0) {
    printGalleryData = galleryData.map((item) => (
      <div
        key={item.id}
        className="rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl hover:shadow-black-500/20 transition-all duration-300"
      >
        <div className="relative overflow-hidden">
          <img
            src={item.download_url}
            alt="Mountain Landscape"
            className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">{item.author}</h2>
        </div>
      </div>
    ));
  }

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col p-8">
      <div className="mb-6">
        <button
          className="flex items-center gap-2 px-6 py-3 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={getDataHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m21.8 6.4-2.7-3.6c-.38-.5-.97-.8-1.6-.8h-11c-.63 0-1.23.3-1.6.8L2.2 6.4h.01c-.13.18-.21.37-.21.6v13c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-.23-.09-.42-.21-.59h.01ZM6.5 4h11L19 6H5zM4 20V8h16v12z"></path>
            <path d="M13 10h-2v4H8l4 4 4-4h-3z"></path>
          </svg>
          Get Data Using Axios
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {printGalleryData}
      </div>
    </div>
  );
};

export default GalleryGetData;
