import React, { useState } from "react";
import { useLoaderData, useNavigate, useNavigation, useSearchParams } from "react-router-dom";
import LoadingSpiner from "./LoadingSpiner";

const BookDetails = () => {
  const book = useLoaderData();
  const { image, title, desc, authors, publisher, year, rating, url, price } =
    book;
    const [fold,setFold] = useState(true);
    //loader
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadingSpiner></LoadingSpiner>
    }
  return (
    <div className="mx-auto lg:max-w-screen-xl ">
      <div className="max-w-screen-lg border mx-auto rounded-sm mt-12 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 h-full">
          <img className="object-cover w-full  lg:h-full" src={image} alt="" />
        </div>
        <div className="p-8 lg:p-16 lg:w-1/2">
          <div>
            <p className="badge">Brand new!</p>
          </div>
          <h2 className="text-2xl lg:text-4xl mb-3 font-bold">{title}</h2>
          <p>Author: {authors}</p>
          <p>Publisher: {publisher}</p>
          <p>Year: {year}</p>
          <p>Rating: {rating}</p>
          {
            fold ? (
                <>
                    <p>{desc.substring(0,100)}</p>
                    <span className="font-semibold" onClick={()=>setFold(!fold)}>See more</span>               
                </>
            ):
            (
                <>
                    <p>{desc}...</p>
                    <span className="font-semibold" onClick={()=>setFold(!fold)}>Reed less</span>
                </>
            )
          }
          <div className="flex items-center gap-5 mt-8 ">
            <a href={url} target="_blank" className=" bg-blue-400 px-6 py-3 rounded-md text-gray-100 font-semibold">Buy Now</a>
            <p className="font-bold">Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
