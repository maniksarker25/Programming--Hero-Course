import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data,setData] = useState([]);
    const [showAll,setShowAll] = useState(false);
    const [uniqueId,setUniqueId] = useState(null);
    const [singleData,setSingleData] =useState({});
    //even handle------
    const handleShowAll = ()=>{
       setShowAll(true)
    }
    useEffect(() => {
        console.log("hello from useEffect");
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
          .then((res) => res.json())
          .then((data) => setSingleData(data.data));
      }, [uniqueId]);
    
      useEffect(() => {
        const loadData = async () => {
          const res = await fetch(
            `https://openapi.programming-hero.com/api/ai/tools`
          );
          const value = await res.json();
          setData(value.data.tools);
        };
    
        loadData();
      }, []);
    return (
        <>
            <Button>Sort by date</Button>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-64'>
            {
                data.slice(0,showAll? 12 : 6).map(singleData =><SingleData setUniqueId={setUniqueId} singleData={singleData} key={singleData.id}></SingleData>)
            }
        </div>
        {
            !showAll && <div className='text-center'> <span className='inline-block ' onClick={handleShowAll}>
            <Button>Show All</Button>
            </span></div>
        }
        <Modal singleData={singleData}></Modal>

        </>
    );
};

export default Card;