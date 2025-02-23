import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CitiesList from './CitiesList';
import AddCity from './AddCity';
import CityDetails from './CityDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CitiesList />} />
      <Route path="/add-city" element={<AddCity />} />
      <Route path="/cities/:id" element={<CityDetails />} />
    </Routes>
  </Router>
);

export default App;
