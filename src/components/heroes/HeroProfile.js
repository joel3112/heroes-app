import React from 'react';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import HeroProfileImage from './HeroProfileImage';
import HeroProfileData from './HeroProfileData';
import { Space } from '../../styles';
import { isMobileTablet } from '../../utils/helpers';

const HeroProfile = ({ hero, loading }) => {
  const { image, ...restData } = hero;
  const breakpoint = useBreakpointViewport();

  return (
    <Space 
      direction={isMobileTablet(breakpoint) && 'vertical'}
      align={isMobileTablet(breakpoint) && 'center'}
      wrap={isMobileTablet(breakpoint)}
      size={[50, 50]}>
      <HeroProfileImage image={image} loading={loading} />
      
      <HeroProfileData hero={restData} loading={loading} />
    </Space>
  );
};

export default HeroProfile;
