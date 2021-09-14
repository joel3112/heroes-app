import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { heroMapper } from '../utils/heroMapper';
import HeroProfile from '../components/heroes/HeroProfile';

const HeroPage = ({ history }) => {
  const { heroId } = useParams();
  const { data, loading, error } = useFetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroId}.json`);
  const hero = heroMapper(data);

  if (error) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };
  const placeholder = loading ? 'placeholder' : '';

  return (
    <div className="container page-container">
      <div className="header-container">
        <h4 className="placeholder-glow">
          <span className={`${placeholder} col-3 title`}>{hero.superhero}</span>
        </h4>
        <button className={`btn btn-outline-primary ${placeholder}`} onClick={handleReturn}>
          Return
        </button>
      </div>
      <hr />

      <HeroProfile 
        hero={hero} 
        loading={loading} 
        handleReturn={handleReturn} />
    </div>
  );
};

export default HeroPage;
