import React from "react";
import JobForm from "../components/jobs/JobForm";
import { useRouter } from "next/router";

const NewJobPage = () => {
  const router = useRouter();

  const addNewJobHandler = async (enteredJobData) => {
    console.log(enteredJobData);
    await fetch("/api/new-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredJobData),
    });
    router.push("/");
  };
  return (
    <section className="main">
      <JobForm onAddJob={addNewJobHandler} />
    </section>
  );
};

export default NewJobPage;
