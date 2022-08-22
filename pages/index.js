import Head from "next/head";
import Jobs from "../components/jobs/Jobs";
import styles from "../styles/Home.module.css";

import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const Home = (props) => {
  console.log(props.jobs);
  return (
    <div className={styles.container}>
      <Head>
        <title>Job Board</title>
        <meta name="description" content="Create Job Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Jobs
        </h1>
        <Jobs jobs={props.jobs} />
      </section>
    </div>
  );
};

export async function getStaticProps() {
  //the code here only runs on the server
  // fetch data from external API
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const jobsCollection = db.collection("jobs");

  const jobs = await jobsCollection.find().toArray();

  client.close();
  return {
    props: {
      jobs: JSON.parse(
        JSON.stringify(
          jobs.map((job) => ({
            company: job.companyName,
            title: job.jobPosition,
            location: job.jobLocation,
            description: job.jobDescription,
            responsibilities: job.jobResponsibilities,
            type: job.jobType,
            website: job.companyWebsite,
            id: job._id.toString(),
          }))
        )
      ),
    },
    //number of seconds nextjs will regenerate the page if it's not changed
    revalidate: 1,
  };
}
export default Home;
