import React, { use, useState } from 'react';
import Country from '../country/Country';

const Countries = ({ getCountries }) => {
    const countries = use(getCountries);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const handelCountVisited = (country) => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }
    return (
        <div >
            <h1>Visit all Countries </h1>
            <p>Country visited : {visitedCountry.length}</p>
            <ol>

                {
                    visitedCountry.map(country =>  <li key={country.cca3}>{country.name.common}</li> )
                }

            </ol>
            <div className='container'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handelCountVisited={handelCountVisited}>

                    </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;