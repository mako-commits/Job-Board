import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/JobItem.module.css";
import avatar from "../../images/avatar.png";

const JobItem = (props) => {
  const router = useRouter();
  const showJobDetail = () => {
    router.push("/" + props.id);
    // router.push(`/jobs/${props.id}`);
  };
  return (
    <article>
      <div
        className={`flex flex-col md:flex-row md:items-center items-start md:space-x-6 space-x-2 md:p-6 p-3 ${styles.card}`}
        onClick={showJobDetail}
      >
        <Image
          src={props.image || avatar}
          alt=""
          width="80"
          height="88"
          className="flex-none rounded-md bg-slate-100"
        />

        <div className="min-w-0 relative flex-auto mt-5 md:mt-0">
          <div className="flex-none w-full font-normal">
            <dt className="sr-only">Company Name</dt>
            <dd className="text-slate-400">{props.company}</dd>
          </div>
          <h2 className="font-semibold text-white truncate pr-20">
            {props.title}
          </h2>
          <dl className="mt-2 flex flex-wrap gap-2 text-[0.5rem] md:text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500">
                <span className="sr-only">Job Details</span>
                <button onClick={showJobDetail}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </dt>
              <dd>{props.starRating}</dd>
            </div>

            <div>
              <dt className="sr-only">Salary Range</dt>
              <dd className=" px-1 md:px-1.5 ring-1 ring-slate-200 rounded">
                {props.salary || "Not Specified"}
              </dd>
            </div>
            <div className="ml-1">
              <dt className="sr-only">Location</dt>

              <dd className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1 text-slate-400 dark:text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {props.location}
              </dd>
            </div>

            <div>
              <dt className="sr-only">Level</dt>
              <dd className="flex items-center">
                <svg
                  width="2"
                  height="2"
                  fill="currentColor"
                  className="mx-1 text-slate-300"
                  aria-hidden="true"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1 text-slate-400 dark:text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {props.level}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Type</dt>
              <dd className="flex items-center">
                <svg
                  width="2"
                  height="2"
                  fill="currentColor"
                  className="mx-1 text-slate-300 "
                  aria-hidden="true"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1 text-slate-400 dark:text-slate-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {props.type}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
};

export default JobItem;
