

const Model = ({singleJob,setSingleJob}) => {
    // console.log(singleJob);
    const {_id,jobName} = singleJob;
    console.log(jobName)
    const handleEditJob = (event)=>{
        event.preventDefault();
        const form = event.target;
        const jobName = form.jobName.value;
        const email = form.email.value;
        const status = form.status.value;
        const salary = form.salary.value;
        const photoUrl = form.photoUrl.value;
        const job = {jobName,email,status,salary,photoUrl}
        console.log(job)
       fetch(`http://localhost:5000/updateJob/${_id}`,{
        method:'PATCH',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(job)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
       })
    }
    return (
        <>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
            <form onSubmit={handleEditJob} className="bg-base-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Name</span>
              </label>
              <input
                type="text"
                defaultValue={jobName}
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
                placeholder="PHoto"
                className="input input-bordered"
                name="photoUrl"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Update Job"
            className="w-full mt-4 cursor-pointer bg-orange-500 text-white font-bold py-2"
          />
        </form>
              <div onClick={()=>setSingleJob(null)} className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
          </>
    );
};

export default Model;