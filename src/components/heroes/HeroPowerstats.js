import React from 'react';

const HeroPowerstats = ({ powerstats }) => {
  const powers = powerstats ? Object.keys(powerstats) : [];

  return (
    <div className="my-2">
      {powers.map((power) => (
        <div key={power} className="row">
          <span className="text-uppercase me-3 fs-6 col-4 fw-light" style={{ maxWidth: 150 }}>
            {power}:
          </span>
          <div className="progress col-6 p-0">
            <div className="progress-bar" role="progressbar" style={{ width: `${powerstats[power]}%` }} aria-valuenow={powerstats[power]} aria-valuemin="0" aria-valuemax="100">
              {powerstats[power]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroPowerstats;
