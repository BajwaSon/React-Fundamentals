import React from "react";
import Navbar from "./Navbar";
import PageContent from "./PageContent";

const TargetAudience = ({ cardInfo }) => {
  return (
    <section className="h-screen w-full">
      <Navbar />
      <PageContent cardInfo={cardInfo} />
    </section>
  );
};

export default TargetAudience;
