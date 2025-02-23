import React from 'react';
import { Link } from 'react-router-dom';

const cities = [
  { id: 1, name: 'Seattle' },
  { id: 2, name: 'Redmond' }
];

const CitiesList = () => (
  <div>
    <h1>Cities List</h1>
    <ul>
      {cities.map(city => (
        <li key={city.id}>
          <Link to={`/cities/${city.id}`}>{city.name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/add-city">Add City</Link>
  </div>
);

export default CitiesList;
