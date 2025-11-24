import React from "react";
import SingleGalleryCard from "./SingleGalleryCard";

const GalleryCards = ({ cardInfo }) => {
  return (
    <div className="flex gap-8 h-full">
      {cardInfo.map((item) => (
        <SingleGalleryCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default GalleryCards;
