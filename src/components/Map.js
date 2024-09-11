// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sample data for the map
const locations = [
  { name: 'Yaoundé', coordinates: [3.848, 11.5021], description: 'Capital city of Cameroon.' },
  { name: 'Douala', coordinates: [4.0511, 9.7679], description: 'Largest city and economic hub of Cameroon.' },
  { name: 'Garoua', coordinates: [9.3351, 13.3903], description: 'Major city in the Northern region, known for its agriculture.' },
  // Add more locations as needed
];

const Map = () => {
  return (
    <div>
      <h2>Interactive Map of Cameroon</h2>
      <MapContainer center={[5, 12]} zoom={6} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.coordinates}>
            <Popup>
              <strong>{location.name}</strong> - {location.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

