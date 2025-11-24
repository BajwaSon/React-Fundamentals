import React from "react";
import TargetAudience from "./components/target-audience/TargetAudience";

const App = () => {
  const galleryCards = [
    {
      id: 1,
      content:
        "Amazing quality! The product exceeded my expectations and delivery was super fast.",
      tag: "Satisfied",
      tagBgColor: "#FF5796",
      poster:
        "https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg",
    },
    {
      id: 2,
      content:
        "Excellent customer service — they helped me with a quick exchange without any hassle.",
      tag: "Supprotive",
      tagBgColor: "#4CAF50",
      poster:
        "https://i.pinimg.com/736x/f8/c2/50/f8c250cee69761cb73cfb21b52b9747b.jpg",
    },
    {
      id: 3,
      content:
        "Very comfortable and stylish. I’ll definitely recommend this to my friends.",
      tag: "Recommended",
      tagBgColor: "#2196F3",
      poster:
        "https://i.pinimg.com/736x/1d/f1/48/1df148bff017c65474e302ce4b0d3ec5.jpg",
    },
  ];

  return <TargetAudience cardInfo={galleryCards} />;
};

export default App;
