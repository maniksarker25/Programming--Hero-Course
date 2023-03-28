import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,population,region,name,flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name:{name.common}</h2>
            <h2>Region:{region}</h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p>Area:{area}</p>
            
        </div>
    );
};

export default Country;