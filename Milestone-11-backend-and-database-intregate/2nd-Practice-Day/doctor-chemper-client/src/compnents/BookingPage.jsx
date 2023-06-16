import { useLoaderData } from "react-router-dom";


const BookingPage = () => {

    const service = useLoaderData();
    return (
        <div>
            <h1 className="text-4xl text-center text-green-500 font-bold">{service.serviceName}</h1>
        </div>
    );
};

export default BookingPage;