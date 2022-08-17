import Nav from "./Nav";
import NavItem from "./NavItem";
import JobList from "./JobList";
import JobDetail from "./JobDetail";

const DUMMY_JOBS = [
  {
    id: "m1",
    title: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    starRating: 2.66,
    salary: "250k - 300k",
    location: "San Fransisco",
    level: "Mid-Level",
    type: "Full time",
    company: "MasterCard",
    description:
      "This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.",
  },
  {
    id: "m2",
    title: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    starRating: 2.66,
    salary: "250k - 300k",
    location: "San Fransisco",
    level: "Mid-Level",
    type: "Full time",
    company: "MasterCard",
    description:
      "This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat.",
  },
];
const Jobs = () => {
  return (
    <div className="divide-y divide-slate-100">
      <Nav>
        <NavItem href="/new" isActive>
          New Releases
        </NavItem>
        <NavItem href="/top">Top Rated</NavItem>
        <NavItem href="/picks">Vincent’s Picks</NavItem>
      </Nav>

      <JobList jobs={DUMMY_JOBS} />
      {/* <JobDetail jobs={DUMMY_JOBS} /> */}

      {/* <JobList>
        {DUMMY_JOBS.map((job) => (
          <JobItem key={job.id} job={DUMMY_JOBS} />
        ))}
      </JobList> */}
    </div>
  );
};

export default Jobs;
