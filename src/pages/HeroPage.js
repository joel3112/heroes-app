import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { LeftOutlined } from '@ant-design/icons';
import { Button, Title } from '../styles';
import HeroProfile from '../components/heroes/HeroProfile';
import { heroMapper } from '../utils/heroMapper';

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
    <div className="container page-container">
      <div className="header-container">
        <Title className="title" loading={loading}>
          {hero.superhero}
        </Title>

        <Button 
          size="large"
          type="primary"
          ghost
          icon={<LeftOutlined />}
          onClick={handleReturn}>Return</Button>
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
