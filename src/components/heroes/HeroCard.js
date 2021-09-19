import React, { useContext } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { Space } from 'antd';
import HeroFavButton from './HeroFavButton';
import { Text, Title } from '../../styles/index';

const CardContainer = styled(Link)`
  overflow: hidden;
  outline: none;
  transition: color 0.3s;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-gray-light);
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  overflow: hidden;
  z-index: 3;
  padding: 0;
  position: relative;
`;

const CardImage = styled.div`
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--placeholder-bg);

  a:hover & {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`;

const CardBody = styled.div`
  border-top: 5px solid var(--primary);
  height: 110px;
  padding: 10px 13px;
  position: relative;
  transition: color 0.3s;
  background-color: var(--white);

  ::before {
    content: '';
    background: var(--primary);
    height: 100%;
    position: absolute;
    bottom: 100%;
    left: 0;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    -webkit-transition: -webkit-transform 0.3s;
    transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    transition: transform 0.3s, -webkit-transform 0.3s;
    width: 100%;
    z-index: -1;
  }
  a:hover &::before {
    transform: translate3d(0, 100%, 0);
    z-index: 2;
  }
`;

const SkeletonData = () => {
  return (
    <Space direction="vertical">
      <Skeleton width={100} height={20} />
      <Skeleton width={125} height={15} />
    </Space>
  );
};

const LIMIT_CHARACTERS = 15;

const HeroCard = ({ id, superhero, image, full_name }) => {
  const { isFavorite, add, remove } = useContext(FavoritesContext);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    const hero = { id, superhero };

    return !isFavorite(id) ? add(hero) : remove(hero);
  };

  return (
    <CardContainer to={`./heroes/${id}`}>
      <CardHeader>
        <CardImage style={{ backgroundImage: `url(${image})` }}></CardImage>
      </CardHeader>
      <CardBody>
        {!id ? (
          SkeletonData()
        ) : (
          <Space direction="vertical" size={[2, 2]}>
            <Title level={5} style={{ zIndex: 3 }} breakline uppercase>
              {superhero}
            </Title>
            {superhero.length < LIMIT_CHARACTERS && full_name.length < LIMIT_CHARACTERS && (
              <Text size={0.75} weight={300} style={{ opacity: 0.6, zIndex: 3 }} uppercase>
                {full_name}
              </Text>
            )}
            <HeroFavButton favorite={isFavorite(id)} handleClick={handleFavoriteClick} />
          </Space>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default React.memo(HeroCard);
