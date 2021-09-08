import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { heroMapper } from '../utils/heroMapper';
import HeroPowerstats from '../components/heroes/HeroPowerstats';

const HeroPage = ({ history }) => {
  const { heroId } = useParams();
  const { data, loading, error } = useFetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroId}.json`);
  const hero = heroMapper(data);

  if (error) {
    return <Redirect to="/" />;
  }

  const { image, superhero, full_name, place_of_birth, publisher, alter_ego, first_appearance, aliases, powerstats } = hero;
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };
  const placeholder = loading ? 'placeholder' : '';

  return (
    <div>
      <h4 className="placeholder-glow text-uppercase">
        <span className={`${placeholder} col-2`}>{superhero}</span>
      </h4>
      <hr />

      <div className="row mt-5 mx-1">
        <div className="col-4 bg-secondary bg-opacity-50 p-0 me-4" style={{ height: 391, width: 296 }}>
          {!loading && <img src={image} alt={superhero} className="img-thumbnail animate__animated animate__fadeIn p-0 border-0" />}
        </div>

        <div className="col-7 animate__animated animate__fadeIn">
          <h4 className="placeholder-glow ms-3 mb-3">
            <span className={`${placeholder} col-3 fw-light`}>{full_name || superhero}</span>
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} col-6`}>
                <b>Place of bith:</b> {place_of_birth}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} col-6`}>
                <b>Aliases:</b> {aliases?.join(', ')}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} col-6`}>
                <b>Alter ego:</b> {alter_ego}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} col-6`}>
                <b>Publisher:</b> {publisher}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} col-6`}>
                <b>First appearance:</b> {first_appearance}
              </span>
            </li>
            <li className="list-group-item placeholder-glow">
              <span className={`${placeholder} col-6`}>
                <b>Powerstats:</b>
                <HeroPowerstats powerstats={powerstats} />
              </span>
            </li>
          </ul>

          {/* <h5>Characters</h5>
          <p>{characters}</p> */}

          <button className={`btn btn-outline-primary ${placeholder} ms-3 mt-3`} onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
