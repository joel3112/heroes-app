import React from 'react';
import HeroCard from './HeroCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfinitiveScroll } from '../../hooks/useInfinitiveScroll';

const HeroList = ({ heroes, maxHeroesByPage }) => {
  console.log(heroes);
  const [items, fetchMoreData] = useInfinitiveScroll(heroes, maxHeroesByPage);
  
  return (
    <InfiniteScroll 
      className="row row-cols-1 row-cols-md-5 g-4 mb-5" 
      dataLength={items.length} 
      next={fetchMoreData}
      hasMore={true}
    >
      {items.map((item, index) => (
        <HeroCard key={item.id || index} {...item} />
      ))}
    </InfiniteScroll>
  );
};

export default HeroList;
