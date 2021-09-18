import React, { useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { ContainerContext } from '../contexts/ContainerContext';
import { useFetch } from '../hooks/useFetch';
import { Affix } from 'antd';
import { Button } from '../styles';
import HeroHeader from '../components/heroes/HeroHeader';
import HeroProfile from '../components/heroes/HeroProfile';
import { heroMapper } from '../utils/helpers';

const HeroPage = ({ history }) => {
  const { container } = useContext(ContainerContext);
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
      <Affix target={() => container}>
        <HeroHeader title={hero.superhero} loading={loading}>
          <Button 
            size="large"
            type="primary"
            ghost
            icon={<LeftOutlined />}
            onClick={handleReturn}>Return</Button>
        </HeroHeader>
      </Affix>
      
      <HeroProfile 
        hero={hero} 
        loading={loading} 
        handleReturn={handleReturn} />
    </div>
  );
};

export default HeroPage;
