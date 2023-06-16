import { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Model from "../Model";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [singleJob,setSingleJob] = useState(null);
  console.log(singleJob)
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/allJobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h1 className="mt-16 text-center text-4xl font-bold">
        All Posted Jobs Here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Jobs  setSingleJob={setSingleJob} setLoading={setLoading} key={job._id} job={job}></Jobs>
        ))}
      </div>
     {singleJob &&  <Model setSingleJob={setSingleJob}  singleJob={singleJob}/>}
    </div>
  );
};

export default Home;
