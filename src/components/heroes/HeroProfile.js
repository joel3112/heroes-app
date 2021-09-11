import React from 'react';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import HeroPowerstats from './HeroPowerstats';
import './HeroProfile.css';

const HeroProfile = ({ hero, loading, handleReturn }) => {
  const { image, superhero, full_name, place_of_birth, publisher, alter_ego, first_appearance, aliases, powerstats } = hero;
  const breakpoint = useBreakpointViewport();
  const placeholder = loading ? 'placeholder' : '';
  const placeholderCol = breakpoint === 'xs' ? 'col-12' : 'col-6';

  return (
    <div className="container page-container">
      <h4 className="placeholder-glow text-uppercase header-container">
        <span className={`${placeholder} col-3 title`}>{superhero}</span>

        <button className={`btn btn-outline-primary ${placeholder}`} onClick={handleReturn}>
          Return
        </button>
      </h4>
      <hr />

      <div className={`profile-container ${breakpoint}`}>
        <div className="image-container" style={{ backgroundImage: `url(${image})` }}></div>

        <div className="animate__animated animate__fadeIn w-100">
          <h4 className="placeholder-glow ms-3 mb-3">
            <span className={`${placeholder} col-3 fw-light text-uppercase name`}>{full_name || superhero}</span>
          </h4>

          <ul className="list-group-flush ps-0">
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} ${placeholderCol}`}>
                <b>Place of bith:</b> {place_of_birth}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} ${placeholderCol}`}>
                <b>Aliases:</b> {aliases?.join(', ')}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} ${placeholderCol}`}>
                <b>Alter ego:</b> {alter_ego}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} ${placeholderCol}`}>
                <b>Publisher:</b> {publisher}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} ${placeholderCol}`}>
                <b>First appearance:</b> {first_appearance}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} ${placeholderCol}`}>
                <b>Powerstats:</b>
                <HeroPowerstats powerstats={powerstats} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
