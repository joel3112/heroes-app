import React from 'react';
import HeroCard from './HeroCard';
import InfiniteScroll from 'react-infinite-scroller';
import { useInfinitiveScroll } from '../../hooks/useInfinitiveScroll';
import { Row, Col } from 'antd';

const HeroList = ({ heroes, maxHeroesByPage }) => {
  const [{ items, hasMore, loading }, fetchMoreData] = useInfinitiveScroll(heroes, maxHeroesByPage);

  return (
    Boolean(items && items.length) && (
      <InfiniteScroll 
        initialLoad={false} 
        pageStart={1} 
        loadMore={fetchMoreData} 
        hasMore={!loading && hasMore} 
        useWindow={false} 
        getScrollParent={() => document.getElementById('main-container')}>
        <Row gutter={[18, 18]}>
          {items.map((item, index) => (
            <Col key={item.id || index} xs={12} sm={12} md={8} lg={6} xl={4} xxl={4}>
              <HeroCard {...item} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    )
  );
};

export default React.memo(HeroList);
