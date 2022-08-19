import React from "react";
import JobForm from "../components/jobs/JobForm";
import { useRouter } from "next/router";

const NewJobPage = () => {
  const router = useRouter();

  const addNewJobHandler = async (enteredJobData) => {
    console.log(enteredJobData);
    const response = await fetch("/api/new-job", {
      method: "POST",
      body: JSON.stringify(enteredJobData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 201) {
      alert("Job post created successfully");
      router.push("/");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <section className="main">
      <JobForm onAddJob={addNewJobHandler} />
    </section>
  );
};

export default NewJobPage;
