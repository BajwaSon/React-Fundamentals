import React from "react";
import JobCard from "./JobCard";
import { freelancersData } from "../data/freelancersData.js";

const JobCardsList = () => {
  return (
    <div className="container">
      <div className="cards-grid">
        {freelancersData.map((freelancer) => (
          <JobCard key={freelancer.id} {...freelancer} />
        ))}
      </div>
    </div>
  );
};

export default JobCardsList;
