import React from "react";
import JobDetail from "../components/jobs/JobDetail";
import styles from "../styles/JobDetail.module.css";
const JobDetails = (props) => {
  return (
    // <JobDetail
    //   id={props.id}
    //   image={props.image}
    //   title={props.title}
    //   salary={props.salary}
    //   location={props.location}
    //   level={props.level}
    //   type={props.type}
    //   company={props.company}
    //   decription={props.description}
    // />
    <main className={styles.main}>
      <JobDetail
        id={props.id}
        image="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Frontend Developer"
        salary="250k - 300k"
        location="San Fransisco"
        level="Mid-Level"
        type="Full time"
        company="MasterCard"
        website="https://website.com"
        description="This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to"
      />
    </main>
  );
};

export default JobDetails;
