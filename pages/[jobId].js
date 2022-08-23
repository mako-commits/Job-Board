import React from "react";
import JobDetail from "../components/jobs/JobDetail";
import styles from "../styles/JobDetail.module.css";

import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
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
      {/* <JobDetail
        id={props.id}
        image="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Frontend Developer"
        salary="250k - 300k"
        location="San Fransisco"
        level="Mid-Level"
        type="Full time"
        company="MasterCard"
        description="This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to"
      /> */}
      <JobDetail
        id={props.jobData.id}
        image={props.jobData.image}
        title={props.jobData.title}
        salary={props.jobData.salary}
        location={props.jobData.location}
        level={props.jobData.level}
        type={props.jobData.type}
        company={props.jobData.company}
        description={props.jobData.description}
      />
    </main>
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const jobsCollection = db.collection("jobs");

  //get all objects in the meetups collection and then map them to an array of paths
  const jobs = await jobsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    //fallback set to true so that the server can fallback to the client if the server is not available
    //fallback set to blocking so that the server will not fallback to the client if the server is not available
    fallback: "blocking",
    paths: jobs.map((job) => ({
      params: { jobId: job._id.toString() },
    })),
  };
};
export const getStaticProps = async (context) => {
  const jobId = context.params.jobId;
  console.log(jobId);

  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const jobsCollection = db.collection("jobs");

  const selectedJob = await jobsCollection.findOne({
    _id: ObjectId(jobId),
  });

  client.close();
  return {
    props: {
      jobData: {
        id: selectedJob._id.toString(),
        company: selectedJob.companyName,
        title: selectedJob.jobPosition,
        location: selectedJob.jobLocation,
        description: selectedJob.jobDescription,
        responsibilities: selectedJob.jobResponsibilities,
        type: selectedJob.jobType,
        website: selectedJob.companyWebsite,
        // salary: selectedJob.jobSalary,
        level: selectedJob.jobLevel,
      },
    },
  };
};
export default JobDetails;
