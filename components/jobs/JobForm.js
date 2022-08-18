import { useRef } from "react";

const JobForm = (props) => {
  const companyNameInput = useRef();
  const companyWebsiteInput = useRef();
  const companyEmailInput = useRef();
  const jobPositionInput = useRef();
  const jobLocationInput = useRef();
  const jobTypeInput = useRef();
  const jobDescriptionInput = useRef();
  const jobResponsibilitiesInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredCompanyName = companyNameInput.current.value;
    const enteredCompanyWebsite = companyWebsiteInput.current.value;
    const enteredCompanyEmail = companyEmailInput.current.value;
    const enteredJobPosition = jobPositionInput.current.value;
    const enteredJobLocation = jobLocationInput.current.value;
    const enteredJobType = jobTypeInput.current.value;
    const enteredJobDescription = jobDescriptionInput.current.value;
    const enteredJobResponsibilities = jobResponsibilitiesInput.current.value;

    const jobData = {
      companyName: enteredCompanyName,
      companyWebsite: enteredCompanyWebsite,
      companyEmail: enteredCompanyEmail,
      jobPosition: enteredJobPosition,
      jobLocation: enteredJobLocation,
      jobType: enteredJobType,
      jobDescription: enteredJobDescription,
      jobResponsibilities: enteredJobResponsibilities,
    };
    props.onAddJob(jobData);
    console.log(jobData);
  };
  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form action="#" method="POST" className="text-black">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company name
                </label>
                <input
                  ref={companyNameInput}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Website
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    https://
                  </span>
                  <input
                    ref={companyWebsiteInput}
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="www.example.com"
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Email address
                </label>
                <input
                  ref={companyEmailInput}
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Position
                </label>
                <input
                  ref={jobPositionInput}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  ref={jobLocationInput}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="job-type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Type
                </label>
                <select
                  ref={jobTypeInput}
                  id="job-type"
                  name="job-type"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                </select>
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Description
                </label>
                <div className="mt-1">
                  <textarea
                    ref={jobDescriptionInput}
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder=""
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Responsibilties
                </label>
                <div className="mt-1">
                  <textarea
                    ref={jobResponsibilitiesInput}
                    id="about"
                    name="about"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder=""
                    defaultValue={""}
                  />
                </div>
              </div>

              {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div> */}

              {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div> */}

              {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div> */}
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={submitHandler}
            >
              Post Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
