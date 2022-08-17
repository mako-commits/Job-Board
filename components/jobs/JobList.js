import React from "react";
import JobItem from "./JobItem";

const JobList = (props) => {
  return (
    <ul className="divide-y divide-slate-100">
      {props.jobs.map((job) => (
        <JobItem
          key={job.id}
          id={job.id}
          image={job.image}
          title={job.title}
          salary={job.salary}
          location={job.location}
          level={job.level}
          type={job.type}
          company={job.company}
        />
      ))}
    </ul>
  );
};

export default JobList;
