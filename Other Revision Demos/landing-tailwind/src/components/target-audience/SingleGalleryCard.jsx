import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const SingleGalleryCard = ({ id, content, tag, tagBgColor, poster }) => {
  return (
    <div className="h-full w-1/3 relative rounded-4xl overflow-hidden">
      <img src={poster} alt={content} className="h-full w-full object-cover" />
      <div className="flex flex-col justify-between absolute top-0 left-0 p-10 h-full w-full">
        <span className="h-12 w-12 inline-flex items-center justify-center text-xl font-semibold rounded-full bg-white">
          {id}
        </span>
        <div>
          <p className="text-white text-lg font-medium leading-relaxed mb-10">
            {content}
          </p>
          <div className="flex justify-between">
            <button
              type="button"
              className="text-white font-medium px-8 py-3 rounded-full"
              style={{ backgroundColor: tagBgColor }}
            >
              {tag}
            </button>
            <button
              type="buttom"
              className="text-white font-medium px-4 py-3 rounded-full"
              style={{ backgroundColor: tagBgColor }}
            >
              <RiArrowRightLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGalleryCard;
