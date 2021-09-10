/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

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
      <h5 className="card-title text-uppercase fs-6">{superhero}</h5>
      <p className="card-text fs-6 fw-light lh-sm">{full_name}</p>
    </div>
  );
};

const heroeButton = (id) => {
  if (!id) {
    return <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6" />;
  }

  return (
    <a href={`./heroes/${id}`} className="btn btn-primary">
      More info
    </a>
  );
};

const HeroCard = ({ id, superhero, image, full_name }) => {
  return (
    <div className="col" style={{ width: 'auto' }}>
      <div className="card" style={{ width: 240, height: 447 }}>
        <div className="card-image bg-secondary bg-opacity-50" style={{ height: 285 }}>
          <img src={image} className="card-img-top" alt={superhero} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between bg-light">
          {heroData(id, superhero, full_name)}

          <div className="text-end animate__animated animate__fadeIn">{heroeButton(id)}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
