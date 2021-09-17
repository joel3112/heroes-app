import React from 'react';
import styled from 'styled-components';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import HeroProfileImage from './HeroProfileImage';
import HeroProfileData from './HeroProfileData';
import { isMobileTablet } from '../../utils/helpers';

const RowContainer = styled.div`
  display: flex;
  flex-direction: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'column' : 'row')};
  align-items: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'center' : 'initial')};
  flex-wrap: ${({ breakpoint }) => (isMobileTablet(breakpoint) ? 'wrap' : 'initial')};
  gap: 50px;
`;

const HeroProfile = ({ hero, loading }) => {
  const { image, ...restData } = hero;
  const breakpoint = useBreakpointViewport();

  return (
    <RowContainer breakpoint={breakpoint}>
      <HeroProfileImage image={image} loading={loading} />
      
      <HeroProfileData hero={restData} loading={loading} />
    </RowContainer>
  );
};

export default HeroProfile;
