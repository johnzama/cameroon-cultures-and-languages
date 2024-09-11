// src/components/Cultures.js
import React, { useState } from 'react';

const cultures = [
  { name: 'Bamileke', description: 'Known for their intricate beadwork, pottery, and masks.', region: 'Western Cameroon' },
  { name: 'Fulani', description: 'Pastoralist culture known for their cattle herding and unique attire.', region: 'Northern Cameroon' },
  { name: 'Bakweri', description: 'A coastal culture with rich traditions in fishing and folklore.', region: 'Southwest Cameroon' },
  // Add more cultures as needed
];

const Cultures = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Filtered list of cultures based on search term and region
  const filteredCultures = cultures.filter((culture) => {
    return (
      (selectedRegion === 'All' || culture.region === selectedRegion) &&
      culture.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Cultures of Cameroon</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Region Filter */}
      <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
        <option value="All">All Regions</option>
        <option value="Western Cameroon">Western Cameroon</option>
        <option value="Northern Cameroon">Northern Cameroon</option>
        <option value="Southwest Cameroon">Southwest Cameroon</option>
        {/* Add more regions as needed */}
      </select>

      {/* Filtered Cultures List */}
      <ul>
        {filteredCultures.map((culture, index) => (
          <li key={index}>
            <strong>{culture.name}</strong> - {culture.description} (Region: {culture.region})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cultures;

