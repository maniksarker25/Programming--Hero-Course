import React, { useState } from 'react';

const Mobile = () => {
    const [charge,setCharge] = useState(100);
    const decreaseCharge = ()=>{
       if(charge>0){
        const  newCharge = charge - 10;
        setCharge(newCharge);
       }
    }
    const increaseCharge = ()=>{
        if(charge < 100){
            const newCharge = charge + 10;
            setCharge(newCharge)
        }
    }
    return (
        <div>
            <h1>Charge:{charge}</h1>
            <button onClick={decreaseCharge}  style={{backgroundColor:'red',padding:'10px',borderRadius:'5px',color:'white',marginRight:'10px'}}> Use Battery</button>
            <button onClick={increaseCharge} style={{backgroundColor:'blue',padding:'10px',borderRadius:'5px',color:'white'}}>Charge Battery</button>
        </div>
    );
};

export default Mobile;