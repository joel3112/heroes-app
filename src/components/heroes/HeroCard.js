import React from 'react';

const HeroCard = ({ id, superhero, image, full_name }) => {
  return (
    <div className="col" style={{ width: 'auto' }}>
      <div className="card" style={{ width: 240, height: 447 }}>
        <div className="card-image bg-secondary bg-opacity-50" style={{ height: 285 }}>
          <img src={image} className="card-img-top" alt={superhero} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between bg-light">
          <div className="card-data">
            <h5 className="card-title text-uppercase fs-6">{superhero}</h5>
            <p className="card-text fs-6 fw-light lh-sm">{full_name}</p>
          </div>
          <div className="text-end animate__animated animate__fadeIn">
            <a href={`./heroes/${id}`} className="btn btn-primary">More info</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
