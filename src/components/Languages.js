// src/components/Languages.js
import React, { useState } from 'react';

const languages = [
  { name: 'Fang', region: 'South Cameroon', speakers: '1.2 million' },
  { name: 'Bassa', region: 'Central Cameroon', speakers: '1 million' },
  { name: 'Ewondo', region: 'Central Cameroon', speakers: '2.2 million' },
  { name: 'Douala', region: 'Littoral Cameroon', speakers: '0.5 million' },
  // Add more languages as needed
];

const Languages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Filtered list of languages based on search term and region
  const filteredLanguages = languages.filter((language) => {
    return (
      (selectedRegion === 'All' || language.region === selectedRegion) &&
      language.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Languages of Cameroon</h2>

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
        <option value="South Cameroon">South Cameroon</option>
        <option value="Central Cameroon">Central Cameroon</option>
        <option value="Littoral Cameroon">Littoral Cameroon</option>
        {/* Add more regions as needed */}
      </select>

      {/* Filtered Languages List */}
      <ul>
        {filteredLanguages.map((language, index) => (
          <li key={index}>
            <strong>{language.name}</strong> - {language.region} ({language.speakers} speakers)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;

