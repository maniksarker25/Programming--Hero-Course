import { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProvider";
import MyJobsRow from "./MyJobsRow";

const MyJobs = () => {
  const { user } = useContext(authContext);
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myJobs/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyJobs(data));
  }, [user]);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">My all jobs here </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Job</th>
              <th>Email</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
                {
                    myJobs.map(myJob=><MyJobsRow key={myJob._id} myJob={myJob}></MyJobsRow>)
                }
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
