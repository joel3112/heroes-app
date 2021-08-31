import React from 'react';
import HeroCardSkeleton from './HeroCardSkeleton';

const HeroListSkeleton = ({ heroes }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn mb-5">
      {heroes.map((_, index) => (
        <HeroCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default HeroListSkeleton;
