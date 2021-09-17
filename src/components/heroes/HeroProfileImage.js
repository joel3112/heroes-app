import React from 'react'
import styled from 'styled-components';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import { Image } from '../../styles';
import { isMobileTabletMedium } from '../../utils/helpers';

const widthImage = (breakpoint) => (isMobileTabletMedium(breakpoint) ? 280 : 312);
const heightImage = (breakpoint) => (isMobileTabletMedium(breakpoint) ? 373 : 426);

const ImageContainer = styled.div`
  width: ${({ breakpoint }) => widthImage(breakpoint)}px;
  min-width: ${({ breakpoint }) => widthImage(breakpoint)}px;
  height: ${({ breakpoint }) => heightImage(breakpoint)}px;
  display: flex;
  background-color: var(--placeholder-bg);
`;

const HeroProfileImage = ({ loading, image }) => {
  const breakpoint = useBreakpointViewport();

  return (
    <ImageContainer breakpoint={breakpoint}>
      {!loading && <Image width="100%" height="100%" src={image} />}
    </ImageContainer>
  );
};

export default HeroProfileImage;
