// src/components/Regions.js
import React from 'react';

const regions = [
  { name: 'Adamawa', description: 'Known as the "Land of the Fulanis," rich in pastoral activities and cattle rearing.' },
  { name: 'Centre', description: 'Home to the capital, Yaoundé, and known for its diverse cultures and ethnic groups.' },
  { name: 'Littoral', description: 'Includes Douala, Cameroon\'s largest city and commercial hub, with vibrant cultures and coastal traditions.' },
  // Add more regions as needed
];

const Regions = () => {
  return (
    <div>
      <h2>Regions of Cameroon</h2>
      <ul>
        {regions.map((region, index) => (
          <li key={index}>
            <strong>{region.name}</strong> - {region.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Regions;

