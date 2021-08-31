/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const HeroCardSkeleton = () => {
  return (
    <div className="col" style={{ width: 'auto' }}>
      <div className="card" aria-hidden="true" style={{ width: 240, height: 447 }}>
        <div className="card-image placeholder bg-secondary" style={{ height: 285 }}></div>
        <div className="card-body d-flex flex-column justify-content-between bg-light">
          <div className="card-data">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-8"></span>
            </p>
          </div>
          <div className="text-end">
            <a href="#" tabIndex="-1" className="btn btn-primary disabled placeholder col-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSkeleton;
