import React from 'react';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import HeroPowerstats from './HeroPowerstats';
import './HeroProfile.css';

const HeroProfile = ({ hero, loading }) => {
  const { image, superhero, full_name, place_of_birth, publisher, alter_ego, first_appearance, aliases, powerstats } = hero;
  const breakpoint = useBreakpointViewport();
  const placeholder = loading ? 'placeholder' : '';

  return (
    <div className={`profile-container ${breakpoint}`}>
      <div className="image-container">
        {image && <img src={image} alt="heroe" />}
      </div>

      <div className={`data-container animate__animated animate__fadeIn ${loading ? 'loading' : ''}`}>
        <h4 className="placeholder-glow ms-3 mb-3">
          <span className={`${placeholder} col-4 name`}>{full_name || superhero}</span>
        </h4>

        <ul className="list-group-flush ps-0">
          <li className="list-group-item placeholder-glow">
            <span className={`${placeholder} col-12`}>
              <HeroPowerstats powerstats={powerstats} />
            </span>
          </li>
          <li className="list-group-item placeholder-glow">
            <span className={`${placeholder} col-12`}>
              <b>Place of bith:</b> {place_of_birth}
            </span>
          </li>
          <li className="list-group-item placeholder-glow">
            <span className={`${placeholder} col-12`}>
              <b>Aliases:</b> {aliases?.join(', ')}
            </span>
          </li>
          <li className="list-group-item placeholder-glow">
            <span className={`${placeholder} col-12`}>
              <b>Alter ego:</b> {alter_ego}
            </span>
          </li>
          <li className="list-group-item placeholder-glow">
            <span className={`${placeholder} col-12`}>
              <b>Publisher:</b> {publisher}
            </span>
          </li>
          <li className="list-group-item placeholder-glow">
            <span className={`${placeholder} col-12`}>
              <b>First appearance:</b> {first_appearance}
            </span>
          </li>      
        </ul>
      </div>
    </div>
  );
};

export default HeroProfile;
