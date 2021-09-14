import React from 'react';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import './HeroPowerstats.css';

const HeroPowerstats = ({ powerstats }) => {
  const powers = powerstats ? Object.keys(powerstats) : [];
  const breakpoint = useBreakpointViewport();

  const percentage = (value, label) => {
    return (
      <div className="powerstat-container">
        <div className="single-chart">
          <svg viewBox="0 0 36 36" className="circular-chart orange">
            <path
              className="circle-bg"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle"
              strokeDasharray={`${value}, 100`}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              {value}%
            </text>
          </svg>
        </div>
        <span className="powerstat-label">{label}</span>
      </div>
    );
  };

  return (
    <div className={`powersats-group ${breakpoint}`}>
      <div className="powerstats-container">
        {powers.slice(0, 3).map((power) => (
          <div key={power}>{percentage(powerstats[power], power)}</div>
        ))}
      </div>
      <div className="powerstats-container">
        {powers.slice(3).map((power) => (
          <div key={power}>{percentage(powerstats[power], power)}</div>
        ))}
      </div>
    </div>
  );
};

export default HeroPowerstats;
