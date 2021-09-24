import React, { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { ContainerContext } from '../../contexts/ContainerContext';
import { FavoritesContextProvider } from '../../contexts/FavoritesContext';
import { useInfinitiveScroll } from '../../hooks/useInfinitiveScroll';
import HeroCard from './HeroCard';
import { BREAKPOINT_COLS } from '../../utils/constants';
import { useBreakpointViewport } from '../../hooks/useBreakpointViewport';

const HeroList = ({ heroes, maxHeroesByPage, infiniteScroll = true }) => {
  const { container } = useContext(ContainerContext);
  const [{ items, hasMore, loading }, fetchMoreData] = useInfinitiveScroll(heroes, maxHeroesByPage);
  const breakpoint = useBreakpointViewport();

  const ListContainer = () => {
    return (
      <div className="row">
        {items.map((item, index) => (
          <div className={`col-${BREAKPOINT_COLS[breakpoint]}`} key={item.id || index} style={{ marginBottom: 'calc(2 * var(--glutter-card-grid))' }}>
            <HeroCard {...item} />
          </div>
        ))}
      </div>
    );
  }

  if (!infiniteScroll) {
    return Boolean(items && items.length) && ListContainer();
  }
  
  return (
    Boolean(items && items.length) && (
      <InfiniteScroll 
        initialLoad={false} 
        pageStart={1} 
        loadMore={fetchMoreData} 
        hasMore={!loading && hasMore} 
        useWindow={false} 
        getScrollParent={() => container}>
        <FavoritesContextProvider>
          {ListContainer()}
        </FavoritesContextProvider>
      </InfiniteScroll>
    )
  );
};

export default React.memo(HeroList);
