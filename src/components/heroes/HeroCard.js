import React from 'react';
import { Link } from 'react-router-dom';
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
      <h5 className="card-title">{superhero}</h5>
      <p className="card-text lh-sm">{full_name}</p>
    </div>
  );
};

const HeroCard = ({ id, superhero, image, full_name }) => {
  return (
    <Link to={`./heroes/${id}`} className="card">
      <div className="card-header">
        <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
      <div className="card-body">{heroData(id, superhero, full_name)}</div>
    </Link>
  );
};

export default React.memo(HeroCard);
