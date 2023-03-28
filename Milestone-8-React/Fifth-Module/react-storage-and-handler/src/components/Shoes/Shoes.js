import React, { useEffect, useState } from 'react';
import { add, multiply } from '../../utilities/utilities';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {
    const first = 14;
    const second = 12;
    const total = add(first,second);
    const result = multiply(first,second);
    const [shoes,setShoes] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setShoes(data))
    },[])
    return (
        <div>
            <h1>This is shoes components</h1>
            <p>Total:{total}</p>
            <p>Multiply:{result}</p>
            {
                shoes.map(shoe=><Shoe shoe={shoe} key={shoe.id}></Shoe>)
            }

        </div>
    );
};

export default Shoes;