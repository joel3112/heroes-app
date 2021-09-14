import React from 'react';
import HeroCard from './HeroCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfinitiveScroll } from '../../hooks/useInfinitiveScroll';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';
import './HeroList.css';

const HeroList = ({ heroes, maxHeroesByPage }) => {
  const [items, fetchMoreData] = useInfinitiveScroll(heroes, maxHeroesByPage);
  const breakpoint = useBreakpointViewport();

  return (
    Boolean(items && items.length) &&
    <InfiniteScroll 
      className={`card-list size-${breakpoint}`}
      dataLength={items.length} 
      next={fetchMoreData}
      hasMore={true}
      scrollableTarget="main-container"
    >
      {items.map((item, index) => (
        <HeroCard key={item.id || index} {...item} />
      ))}
    </InfiniteScroll>
  );
};

export default React.memo(HeroList);
