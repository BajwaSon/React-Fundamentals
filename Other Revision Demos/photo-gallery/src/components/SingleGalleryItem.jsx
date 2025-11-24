import React from "react";

const SingleGalleryItem = ({ galleryItem }) => {
  return (
    <div
      key={galleryItem.id}
      className="rounded-lg overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl hover:shadow-black-500/20 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={galleryItem.download_url}
          alt="Mountain Landscape"
          className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{galleryItem.author}</h2>
      </div>
    </div>
  );
};

export default SingleGalleryItem;
