import React from 'react';
import Slider from 'react-slick';
import HeroCard from './HeroCard';

const HeroSlider = ({ heroes, slidesToShow, speed = 500 }) => {
  return (
    <Slider 
      infinite={false} 
      lazyLoad={true} 
      speed={speed} 
      slidesToShow={slidesToShow} 
x      slidesToScroll={slidesToShow}>
      {heroes.map((hero, index) => (
        <HeroCard key={hero.id || index} {...hero} />
      ))}
    </Slider>
  );
};

export default HeroSlider;
