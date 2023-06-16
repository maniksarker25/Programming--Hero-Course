import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id,doctorName,serviceName,price,image} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>Doctor Name:{doctorName}</p>
        <p>Price:{price}</p>
        <div className="card-actions justify-end">
          <Link to={`/booking/${_id}`}><button  className="btn btn-primary">Booking Now Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
