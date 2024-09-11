// src/components/Cultures.js
import React from 'react';

const cultures = [
  { name: 'Bamileke', description: 'Known for their intricate beadwork, pottery, and masks.', region: 'Western Cameroon' },
  { name: 'Fulani', description: 'Pastoralist culture known for their cattle herding and unique attire.', region: 'Northern Cameroon' },
  { name: 'Bakweri', description: 'A coastal culture with rich traditions in fishing and folklore.', region: 'Southwest Cameroon' },
  // Add more cultures as needed
];

const Cultures = () => {
  return (
    <div>
      <h2>Cultures of Cameroon</h2>
      <ul>
        {cultures.map((culture, index) => (
          <li key={index}>
            <strong>{culture.name}</strong> - {culture.description} (Region: {culture.region})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cultures;

