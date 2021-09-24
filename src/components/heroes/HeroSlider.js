import React from 'react';
import Slider from 'react-slick';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import HeroCard from './HeroCard';
import { BREAKPOINT_COLS, GRID_COLUMNS } from '../../utils/constants';

const HeroSlider = ({ heroes, slidesToShow, speed = 500 }) => {
  const breakpoint = useBreakpointViewport();

  return (
    <Slider
      infinite={false}
      lazyLoad={true}
      speed={speed}
      variableWidth={true}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToShow}>
      {heroes.map((item, index) => (
        <div key={item.id || index} style={{ margin: '0 1rem', width: `${100/ ((GRID_COLUMNS / BREAKPOINT_COLS[breakpoint]) * 2)}%` }}>
          <HeroCard {...item} />
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
