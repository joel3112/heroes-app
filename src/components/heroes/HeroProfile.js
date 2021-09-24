import React from 'react';
import { FavoritesContextProvider } from '../../contexts/FavoritesContext';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import HeroProfileImage from './HeroProfileImage';
import HeroProfileData from './HeroProfileData';
import { Space } from '../../styles';
import { isMobileTablet } from '../../utils/helpers';

const HeroProfile = ({ hero, loading }) => {
  const breakpoint = useBreakpointViewport();

  return (
    <Space 
      direction={isMobileTablet(breakpoint) && 'vertical'}
      align={isMobileTablet(breakpoint) && 'center'}
      wrap={isMobileTablet(breakpoint)}
      size={[50, 50]}>
      <FavoritesContextProvider>
        <HeroProfileImage hero={hero} loading={loading} />        
        <HeroProfileData hero={hero} loading={loading} />
      </FavoritesContextProvider>      
    </Space>
  );
};

export default HeroProfile;
