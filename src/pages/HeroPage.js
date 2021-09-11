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

  return (
    <HeroProfile
      hero={hero}
      loading={loading}
      handleReturn={handleReturn} />
  );
};

export default HeroPage;
