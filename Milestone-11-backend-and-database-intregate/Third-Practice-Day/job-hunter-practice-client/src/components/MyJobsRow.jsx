const MyJobsRow = ({myJob}) => {
    const {photoUrl,email,jobName,salary,status} = myJob;
  return (
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={photoUrl}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{jobName}</div>
              <div className="text-sm opacity-50">{status}</div>
            </div>
          </div>
        </td>
        <td>
         {email}
        </td>
        <td>{salary}</td>
      </tr>
  );
};

export default MyJobsRow;
