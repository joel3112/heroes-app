import React from 'react';
import { Link } from 'react-router-dom';
import { useLoadHeroes } from '../hooks/useLoadHeroes';
import { useBreakpointViewport } from '../hooks/useBreakpointViewport';
import HeroHeader from '../components/heroes/HeroHeader';
import HeroSlider from '../components/heroes/HeroSlider';
import { Button, Space, Title } from '../styles';
import { BREAKPOINT_COLS, MAIN_HEROES } from '../utils/constants';
import { getHeroesMainByPublisher, getHeroesPowerstatsSorted } from '../utils/helpers';

const HomePage = ({ history }) => {
  const breakpoint = useBreakpointViewport();
  const [heroes] = useLoadHeroes(history, '', 1);

  const blocks = [
    { id: 'marvel', title: 'Marvel Heroes', heroes: getHeroesPowerstatsSorted(getHeroesMainByPublisher(heroes, MAIN_HEROES.MARVEL)) },
    { id: 'dc', title: 'DC Heroes', heroes: getHeroesPowerstatsSorted(getHeroesMainByPublisher(heroes, MAIN_HEROES.DC)) },
  ];

  return (
    <div className="container page-container">
      <HeroHeader title="Heroes"></HeroHeader>

      {blocks.map(({ id, title, heroes }) => (
        <Space direction="vertical" size={[20, 20]} key={title} style={{ marginBottom: 30 }}>
          <Space justify="between">
            <Title level={5} uppercase>
              {title}
            </Title>
            <Link to={`/${id}`}>
              <Button type="primary" size="large">
                Ver más
              </Button>
            </Link>
          </Space>

          <HeroSlider heroes={heroes} slidesToShow={BREAKPOINT_COLS[breakpoint]} />
        </Space>
      ))}
    </div>
  );
};

export default HomePage;
