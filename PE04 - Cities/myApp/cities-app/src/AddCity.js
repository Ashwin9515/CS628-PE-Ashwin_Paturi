import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add city
    navigate('/');
  };

  return (
    <div>
      <h1>Add City</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="City Name"
          required
        />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
};

export default AddCity;
