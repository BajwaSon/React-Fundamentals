import React from "react";
import HeroText from "./HeroText";
import BottomHeroIcon from "./BottomHeroIcon";

const ContentBlock = () => {
  return (
    <div className="h-full flex flex-col justify-between w-1/3">
      <HeroText />
      <BottomHeroIcon />
    </div>
  );
};

export default ContentBlock;
