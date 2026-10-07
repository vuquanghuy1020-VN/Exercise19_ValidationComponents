import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
  additional,
  diet,
  name,
  scientificName,
  showAdditionalData,
  size,
  image
}) {
  return (
    <div className="animal-wrapper">
      {image && <img src={image} alt={name} className="animal-image" />}
      <h2 className="animal-name">{name}</h2>
      <div className="animal-details">
        <div>Scientific Name: {scientificName}</div>
        <div>{size} kg</div>
        <div>{diet.join(', ')}.</div>
      </div>
      <button 
        className="more-info-btn"
        onClick={() => showAdditionalData(additional)}
      >
        More Info
      </button>
    </div>
  );
}

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditionalData: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  image: PropTypes.string
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
};
