
const Jobs = ({ job,setSingleJob}) => {
  const { _id,jobName, status, salary, photoUrl } = job;

  // const [singleJob,setSingleJob] = useState({});

  const handleSpacificData = (id)=>{
    // console.log(id)

    fetch(`http://localhost:5000/singleJob/${id}`)
    .then(res=>res.json())
    .then(data=>{
      setSingleJob(data)
    })
  }
  return (
    <div className="card mt-12 w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{jobName}</h2>
        <p>Status:{status}</p>
        <p>Salary: {salary}</p>
        <div className="card-actions justify-end">
         
          <label onClick={()=>handleSpacificData(_id)} htmlFor="my-modal" className="btn">
           Edit
          </label>
          
          

          {/* Put this part before </body> tag */}
          
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
