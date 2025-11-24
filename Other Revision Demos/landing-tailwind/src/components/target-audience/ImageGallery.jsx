import React from "react";
import GalleryCards from "./GalleryCards";

const ImageGallery = ({ cardInfo }) => {
  return (
    <div className="h-full w-2/3">
      <GalleryCards cardInfo={cardInfo} />
    </div>
  );
};

export default ImageGallery;
