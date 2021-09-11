import React from 'react';
import './HeroCard.css';

const heroData = (id, superhero, full_name) => {
  if (!id) {
    return (
      <div className="card-data">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-8"></span>
        </p>
      </div>
    );
  }

  return (
    <div className="card-data">
      <h5 className="card-title text-uppercase">{superhero}</h5>
      <p className="card-text lh-sm text-uppercase">{full_name}</p>
    </div>
  );
};

const HeroCard = ({ id, superhero, image, full_name }) => {
  return (
    <a href={`./heroes/${id}`} tabIndex="-1" className="card animate__animated animate__fadeIn">
      <div className="card-header p-0">
        <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="card-body d-flex flex-column justify-content-between bg-light">
        {heroData(id, superhero, full_name)}
      </div>
    </a>
  );
};

export default HeroCard;
