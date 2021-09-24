import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { Space } from 'antd';
import HeroFavButton from './HeroFavButton';
import { Text, Title } from '../../styles/index';
import { isMobileTablet } from '../../utils/helpers';

const CardContainer = styled(Link)`
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px, rgb(0 0 0 / 10%) 0px 0px 2px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const CardImage = styled.div`
  overflow: hidden;
  position: relative;
  height: 30vh;
  max-height: 21em;
  background-image: url("/assets/heroe-placeholder.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--placeholder-bg);

  a:hover & {
    transform: scale(1.1);
    transition: all 0.5s;
  }
  img {
    width: 100%;
  }
`;

const CardBody = styled.div`
  border-top: 4px solid var(--primary);
  background-color: var(--white);
  width: 100%;
  height: 38%;
  max-height: 120px;
  z-index: 3;
  padding: 6%;

  .title {
    font-size: ${({ breakpoint }) => `${isMobileTablet(breakpoint) ? '100%' : '0.95rem'}`};
    word-break: normal;
    margin: 0 !important;
  }
  .text {
    font-size: ${({ breakpoint }) => `${isMobileTablet(breakpoint) ? '80%' : '0.75rem'}`};
    opacity: 0.6;
    word-break: normal;
  }
`;

const SkeletonData = () => {
  return (
    <Space direction="vertical" size={[3, 3]}>
      <Skeleton width={100} height={20} />
      <Skeleton width={125} height={15} />
    </Space>
  );
};

const HeroCard = ({ id, superhero, image, full_name }) => {
  const { isFavorite, add, remove } = useContext(FavoritesContext);
  const breakpoint = useBreakpointViewport();
  const imgRef = useRef();

  useEffect(() => {
    if (image) {
      imgRef.current.style.backgroundImage = `url(${image})`;
    }
  }, [image]);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    const hero = { id, superhero };

    return !isFavorite(id) ? add(hero) : remove(hero);
  };

  return (
    <CardContainer to={`./heroes/${id}`}>
      <CardImage ref={imgRef}></CardImage>
      <CardBody breakpoint={breakpoint}>
        {!id ? (
          SkeletonData()
        ) : (
          <Space direction="vertical" justify="center" size={[2, 2]} style={{ width: '100%' }}>
            <Title className="title" uppercase ellipsis>
              {superhero}
            </Title>
            <Text className="text" uppercase ellipsis>
              {full_name}
            </Text>
          </Space>
        )}
        <HeroFavButton favorite={isFavorite(id)} handleClick={handleFavoriteClick} />
      </CardBody>
    </CardContainer>
  );
};

export default React.memo(HeroCard);
