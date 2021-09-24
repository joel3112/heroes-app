import React, { useContext } from 'react';
import styled from 'styled-components';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { Image } from 'antd';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import HeroFavButton from './HeroFavButton';
import { isMobileTabletMedium } from '../../utils/helpers';

const widthImage = (breakpoint) => (isMobileTabletMedium(breakpoint) ? 280 : 312);
const heightImage = (breakpoint) => (isMobileTabletMedium(breakpoint) ? 373 : 426);

const ImageContainer = styled.div`
  width: ${({ breakpoint }) => widthImage(breakpoint)}px;
  min-width: ${({ breakpoint }) => widthImage(breakpoint)}px;
  height: ${({ breakpoint }) => heightImage(breakpoint)}px;
  display: flex;
  background-color: var(--placeholder-bg);
  position: relative;
  color: var(--primary);
`;

const HeroProfileImage = ({ loading, hero }) => {
  const { id, superhero, image } = hero;
  const breakpoint = useBreakpointViewport();
  const { isFavorite, add, remove } = useContext(FavoritesContext);

  const handleFavoriteClick = (e) => {
    const hero = { id, superhero };

    return !isFavorite(id) ? add(hero) : remove(hero);
  };

  return (
    <ImageContainer breakpoint={breakpoint}>
      {!loading && (
        <>
          <Image preview={false} width="100%" height="100%" src={image} />
          <HeroFavButton size={2.5} favorite={isFavorite(id)} handleClick={handleFavoriteClick} />
        </>
      )}
    </ImageContainer>
  );
};

export default HeroProfileImage;
