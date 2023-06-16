import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";

const PostJob = () => {
    const {user } = useContext(authContext)


    const handleAddJob = (event)=>{
        event.preventDefault();
        const form = event.target;
        const jobName = form.jobName.value;
        const email = form.email.value;
        const status = form.status.value;
        const salary = form.salary.value;
        const photoUrl = form.photoUrl.value;
        const job = {jobName,email,status,salary,photoUrl}
        // console.log(job)
        fetch('http://localhost:5000/addJob',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(job)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-8">Post a job</h2>
      <form onSubmit={handleAddJob}  className="bg-base-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Name</span>
            </label>
            <input
              type="text"
              defaultValue='Web Developer'
              placeholder="Job Name"
              className="input input-bordered"
              name="jobName"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Status</span>
            </label>
            <input
              type="text"
              placeholder="Status"
              defaultValue='remote'
              className="input input-bordered"
              name="status"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">salary</span>
            </label>
            <input
              type="text"
              defaultValue='35k'
              placeholder="Category"
              className="input input-bordered"
              name="salary"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Skill</span>
            </label>
            <input
              type="text"
              defaultValue='React'
              placeholder="Job Name"
              className="input input-bordered"
              name="skill"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              defaultValue='https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYnxlbnwwfHwwfHw%3D&w=1000&q=80'
              placeholder="PHoto"
              className="input input-bordered"
              name="photoUrl"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add Job"
          className="w-full mt-4 cursor-pointer bg-orange-500 text-white font-bold py-2"
        />
      </form>
    </div>
  );
};

export default PostJob;
