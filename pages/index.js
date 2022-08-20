import Head from "next/head";
import Jobs from "../components/jobs/Jobs";
import styles from "../styles/Home.module.css";

const Home = () => {
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
        <Jobs />
      </section>
    </div>
  );
};

export default Home;
