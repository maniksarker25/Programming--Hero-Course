import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps,setSteps] = useState(0);
    const increaseSteps = ()=>{
        const newSteps = steps + 1;
        setSteps(newSteps);
    }
    useEffect(()=>{
        console.log(steps)
    },[steps])

    return (
        <div style={{border:'2px solid red',margin:'10px',padding:'5px'}}>
            <h2>This is my smart Watch!!</h2>
            <p>Steps:{steps}</p>
            <button onClick={increaseSteps}>De Dour</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;