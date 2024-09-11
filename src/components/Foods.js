// src/components/Foods.js
import React from 'react';

const foods = [
  { name: 'Ndolé', description: 'A popular dish made with bitter leaves, nuts, and fish or meat.' },
  { name: 'Achu Soup', description: 'A spiced soup made from cocoyam paste and yellow soup.' },
  { name: 'Koki', description: 'A pudding made from black-eyed peas, often wrapped in banana leaves.' },
  { name: 'Ekwang', description: 'Grated cocoyams wrapped in cocoyam leaves and cooked with palm oil.' },
  // Add more foods as needed
];

const Foods = () => {
  return (
    <div>
      <h2>Traditional Foods of Cameroon</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            <strong>{food.name}</strong> - {food.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foods;

