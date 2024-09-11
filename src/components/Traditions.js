// src/components/Traditions.js
import React from 'react';

const traditions = [
  { name: 'Ngondo Festival', description: 'A water-based festival celebrated by the Sawa people in Douala.' },
  { name: 'Nso Dance Festival', description: 'An annual festival featuring traditional dances in the Nso Kingdom.' },
  { name: 'Fon\'s Palace Ceremonies', description: 'Traditional ceremonies held in the palaces of the Fons (chiefs) in the Northwest region.' },
  // Add more traditions as needed
];

const Traditions = () => {
  return (
    <div>
      <h2>Traditions of Cameroon</h2>
      <ul>
        {traditions.map((tradition, index) => (
          <li key={index}>
            <strong>{tradition.name}</strong> - {tradition.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Traditions;

