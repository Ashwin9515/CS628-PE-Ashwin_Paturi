import React from 'react';
import { useParams } from 'react-router-dom';

const cityDetails = {
  1: { name: 'Seattle', country: 'USA', population: '737,015' },
  2: { name: 'Redmond', country: 'USA', population: '80,280' }
};

const CityDetails = () => {
  const { id } = useParams();
  const city = cityDetails[id];

  return city ? (
    <div>
      <h1>City Details</h1>
      <p>Name: {city.name}</p>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  ) : (
    <p>City not found</p>
  );
};

export default CityDetails;
