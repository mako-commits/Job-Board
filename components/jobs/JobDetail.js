import React from "react";

const JobDetail = (props) => {
  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl ">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            {props.title}
          </h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">
            {props.company}
          </p>
        </div>

        <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
          {/* <dt className="sr-only">Reviews</dt>
          <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              className="mr-1 stroke-current dark:stroke-indigo-500"
            >
              <path
                d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              4.89 <span className="text-slate-400 font-normal">(128)</span>
            </span>
          </dd> */}
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 text-slate-400 dark:text-slate-500"
              aria-hidden="true"
            >
              <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
              <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
            </svg>
            {props.location}
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
          </dd>
          <dt className="sr-only">Job Type</dt>
          <dd className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 text-slate-400 dark:text-slate-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {props.type}
            <svg
              width="2"
              height="2"
              aria-hidden="true"
              fill="currentColor"
              className="mx-3 text-slate-300"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
          </dd>
          <dt className="sr-only">Location</dt>
          <dd className="flex items-center">
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
        </dl>
        <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
          <button
            type="button"
            className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Apply on Company Site
          </button>
        </div>
        <div className="mt-7">
          <h1 className="mt-1 text-md font-semibold text-white sm:text-slate-900 md:text-xl dark:sm:text-white">
            Job Sumaary
          </h1>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-2 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            {props.description}
          </p>
        </div>
        <div className="mt-7">
          <h1 className="mt-1 text-md font-semibold text-white sm:text-slate-900 md:text-xl dark:sm:text-white">
            Responsibilities/Requirements
          </h1>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-2 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            {props.description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default JobDetail;
