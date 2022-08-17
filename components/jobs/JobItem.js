import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const JobItem = (props) => {
  const router = useRouter();
  const showJobDetail = () => {
    router.push("/" + props.id);
    // router.push(`/jobs/${props.id}`);
  };
  return (
    <article className="flex items-start space-x-6 p-6">
      <img
        src={props.image}
        alt=""
        width="60"
        height="88"
        className="flex-none rounded-md bg-slate-100"
      />

      <div className="min-w-0 relative flex-auto">
        <div className="flex-none w-full mt-2 font-normal">
          <dt className="sr-only">Cast</dt>
          <dd className="text-slate-400">{props.company}</dd>
        </div>
        <h2 className="font-semibold text-white truncate pr-20">
          {props.title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="absolute top-0 right-0 flex items-center space-x-1">
            <dt className="text-sky-500">
              <span className="sr-only">Star rating</span>
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
            <dt className="sr-only">Rating</dt>
            <dd className="px-1.5 ring-1 ring-slate-200 rounded">
              {props.salary}
            </dd>
          </div>
          <div className="ml-2">
            <dt className="sr-only">Location</dt>
            <dd>{props.location}</dd>
          </div>
          <div>
            <dt className="sr-only">Level</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
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
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              {props.type}
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default JobItem;
