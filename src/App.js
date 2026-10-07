import React from 'react';
import './App.css';
import animals from './AnimalCard/data';
import AnimalCard from './AnimalCard/AnimalCard';

function showAdditionalData(additional) {
  const alertInformation = Object.entries(additional)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
  alert(alertInformation);
}

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      <div className="animal-container">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.name}
            additional={animal.additional}
            diet={animal.diet}
            name={animal.name}
            scientificName={animal.scientificName}
            showAdditionalData={showAdditionalData}
            size={animal.size}
            image={animal.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
