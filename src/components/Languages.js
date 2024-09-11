// src/components/Languages.js
import React from 'react';

const languages = [
  { name: 'Fang', region: 'South Cameroon', speakers: '1.2 million' },
  { name: 'Bassa', region: 'Central Cameroon', speakers: '1 million' },
  { name: 'Ewondo', region: 'Central Cameroon', speakers: '2.2 million' },
  { name: 'Douala', region: 'Littoral Cameroon', speakers: '0.5 million' },
  // Add more languages as needed
];

const Languages = () => {
  return (
    <div>
      <h2>Languages of Cameroon</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <strong

