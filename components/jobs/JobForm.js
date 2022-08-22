import { useRef, useState } from "react";

const JobForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const companyNameInput = useRef();
  const companyWebsiteInput = useRef();
  const companyEmailInput = useRef();
  const jobPositionInput = useRef();
  const jobLocationInput = useRef();
  const jobTypeInput = useRef();
  const jobDescriptionInput = useRef();
  const jobResponsibilitiesInput = useRef();
  const jobLevelInput = useRef();

  const validateForm = () => {
    return (
      companyNameInput.current.value.trim() !== "" &&
      companyWebsiteInput.current.value.trim() !== "" &&
      companyEmailInput.current.value.includes("@") &&
      jobPositionInput.current.value.trim() !== "" &&
      jobLocationInput.current.value.trim() !== "" &&
      jobTypeInput.current.value.trim() !== "" &&
      jobDescriptionInput.current.value.trim() !== "" &&
      jobResponsibilitiesInput.current.value.trim() !== ""
    );
  };
  const submitHandler = (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //   setFormIsValid(true);
    //   props.onAddJob({
    //     companyName: companyNameInput.current.value,
    //     companyWebsite: companyWebsiteInput.current.value,
    //     companyEmail: companyEmailInput.current.value,
    //     jobPosition: jobPositionInput.current.value,
    //     jobLocation: jobLocationInput.current.value,
    //     jobType: jobTypeInput.current.value,
    //     jobDescription: jobDescriptionInput.current.value,
    //     jobResponsibilities: jobResponsibilitiesInput.current.value,
    //   });
    // } else {
    //   alert("Please fill in all fields");
    //   setFormIsValid(false);
    // }

    const enteredCompanyName = companyNameInput.current.value;
    const enteredCompanyWebsite = companyWebsiteInput.current.value;
    const enteredCompanyEmail = companyEmailInput.current.value;
    const enteredJobPosition = jobPositionInput.current.value;
    const enteredJobLocation = jobLocationInput.current.value;
    const enteredJobType = jobTypeInput.current.value;
    const enteredJobDescription = jobDescriptionInput.current.value;
    const enteredJobResponsibilities = jobResponsibilitiesInput.current.value;
    const enteredJobLevel = jobLevelInput.current.value;

    const jobData = {
      companyName: enteredCompanyName,
      companyWebsite: enteredCompanyWebsite,
      companyEmail: enteredCompanyEmail,
      jobPosition: enteredJobPosition,
      jobLocation: enteredJobLocation,
      jobType: enteredJobType,
      jobDescription: enteredJobDescription,
      jobResponsibilities: enteredJobResponsibilities,
      jobLevel: enteredJobLevel,
    };
    props.onAddJob(jobData);
    console.log(jobData);
  };
  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form
        // action="#"
        // method="POST"
        className="text-black"
        onSubmit={submitHandler}
      >
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              {/* Company Name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company name
                </label>
                <input
                  required
                  ref={companyNameInput}
                  type="text"
                  name="company-name"
                  id="company-name"
                  autoComplete="company-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md valid:ring-green-500 valid:border-green-500 "
                />
              </div>

              {/* Company Website */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="company-website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Website
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  {/* <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    https://
                  </span> */}
                  <input
                    required
                    ref={companyWebsiteInput}
                    type="url"
                    name="company-website"
                    id="company-website"
                    className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 valid:ring-green-500 valid:border-green-500"
                    placeholder=" https://www.example.com"
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
                  required
                  ref={companyEmailInput}
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md valid:ring-green-500 valid:border-green-500"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="job-position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Position
                </label>
                <input
                  required
                  ref={jobPositionInput}
                  type="text"
                  name="job-position"
                  id="job-position"
                  autoComplete="job-position"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md valid:ring-green-500 valid:border-green-500"
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
                  required
                  ref={jobLocationInput}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md valid:ring-green-500 valid:border-green-500"
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
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="job-type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Experience Level
                </label>
                <select
                  ref={jobLevelInput}
                  id="job-level"
                  name="job-level"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Senior</option>
                  <option>Mid Level</option>
                  <option>Junior</option>
                  <option>Intern</option>
                  <option>Entry Level</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Salary
                </label>
                <input
                  optional
                  ref={jobLocationInput}
                  type="text"
                  name="salary"
                  id="salary"
                  placeholder="200k - 400k"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md "
                />
              </div>
              {/* <div className="col-span-6 ">
                <label className="block text-sm font-medium text-gray-700">
                  Company Logo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="col-span-6 ">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium text-gray-700"
                >
                  Job Description
                </label>
                <div className="mt-1">
                  <textarea
                    required
                    ref={jobDescriptionInput}
                    id="job-description"
                    name="job-description"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md valid:ring-green-500 valid:border-green-500"
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
                    required
                    ref={jobResponsibilitiesInput}
                    id="job-responsibilities"
                    name="job-responsibilities"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md valid:ring-green-500 valid:border-green-500"
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
