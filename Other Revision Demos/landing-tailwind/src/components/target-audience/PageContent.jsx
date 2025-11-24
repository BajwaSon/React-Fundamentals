import React from "react";
import ContentBlock from "./ContentBlock";
import ImageGallery from "./ImageGallery";

const PageContent = ({ cardInfo }) => {
  return (
    <div className="flex items-center gap-10 pt-10 pb-20 px-18 h-[90vh]">
      <ContentBlock />
      <ImageGallery cardInfo={cardInfo} />
    </div>
  );
};

export default PageContent;
