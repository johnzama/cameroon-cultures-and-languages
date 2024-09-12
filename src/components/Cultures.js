// src/components/Cultures.js
import React from 'react';

// Sample data with images
const cultures = [
  {
    name: 'Bamileke',
    description: 'Known for their intricate beadwork, pottery, and masks.',
    region: 'Western Cameroon',
    imageUrl: '/images/bamileke.jpg', // Add image URL
  },
  {
    name: 'Fulani',
    description: 'Pastoralist culture known for their cattle herding and unique attire.',
    region: 'Northern Cameroon',
    imageUrl: '/images/fulani.jpg', // Add image URL
  },
  {
    name: 'Bakweri',
    description: 'A coastal culture with rich traditions in fishing and folklore.',
    region: 'Southwest Cameroon',
    imageUrl: '/images/bakweri.jpg', // Add image URL
  },
  // Add more cultures with image URLs as needed
];

const Cultures = () => {
  return (
    <div>
      <h2>Cultures of Cameroon</h2>
      <ul>
        {cultures.map((culture, index) => (
          <li key={index}>
            <img src={culture.imageUrl} alt={culture.name} style={{ width: '200px', height: 'auto' }} /> {/* Display image */}
            <strong>{culture.name}</strong> - {culture.description} (Region: {culture.region})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cultures;

