import React from "react";

const JobCard = ({
  name,
  location,
  status,
  jobTitle,
  description,
  focusAreas,
  projects,
  rate,
  image,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="avatar">
          <img src={image} alt={name} />
        </div>
        <div className="card-info">
          <div className="name">{name}</div>
          <div className="location">{location}</div>
          <span
            className={`status-badge ${
              status === "Available" ? "status-available" : "status-unavailable"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="job-title">{jobTitle}</div>
      <p className="description">{description}</p>
      <div className="focus-title">Focus Area</div>
      <div className="tags">
        {focusAreas.map((tag) => {
          <span className="tag">{tag}</span>;
        })}
      </div>

      <div className="card-footer">
        <div className="stat">
          <svg
            className="stat-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>
          {projects} Projects
        </div>
        <div className="stat">
          <svg
            className="stat-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          ${rate}/hr
        </div>
      </div>
      <button className="invite-btn">Invite for Job</button>
    </div>
  );
};

export default JobCard;
