import React, { useState } from 'react';
import '../../App.css';

const Country = ({country,handelCountVisited}) => {
    const [visited,setVisited]=useState(false);
    // console.log(handelCountVisited);
    const handleVisited=()=>{
        
        setVisited(!visited);
        handelCountVisited(country);
    }
    return (
        <div className={`sinCard ${visited && 'visitedCountry'}`}>
            <img src={country.flags.png} alt="" />
            <p>Country Name : {country.name.common}</p>
            <p>Capital : {country.capital[0]}</p>
            <button onClick={handleVisited}>{visited?"visited":"not visited"}</button>
        </div>
    );
};

export default Country;