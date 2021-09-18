import React, { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { ContainerContext } from '../../contexts/ContainerContext';
import { useInfinitiveScroll } from '../../hooks/useInfinitiveScroll';
import HeroCard from './HeroCard';
import { Row, Col } from 'antd';
import { BREAKPOINTS, BREAKPOINT_COLS } from '../../utils/constants';

const HeroList = ({ heroes, maxHeroesByPage }) => {
  const { container } = useContext(ContainerContext);
  const [{ items, hasMore, loading }, fetchMoreData] = useInfinitiveScroll(heroes, maxHeroesByPage);
  
  return (
    Boolean(items && items.length) && (
      <InfiniteScroll 
        initialLoad={false} 
        pageStart={1} 
        loadMore={fetchMoreData} 
        hasMore={!loading && hasMore} 
        useWindow={false} 
        getScrollParent={() => container}>
        <Row gutter={[18, 18]}>
          {items.map((item, index) => (
            <Col 
              key={item.id || index} 
              xs={24/BREAKPOINT_COLS[BREAKPOINTS.XS]} 
              sm={24/BREAKPOINT_COLS[BREAKPOINTS.SM]} 
              md={24/BREAKPOINT_COLS[BREAKPOINTS.MD]} 
              lg={24/BREAKPOINT_COLS[BREAKPOINTS.LG]} 
              xl={24/BREAKPOINT_COLS[BREAKPOINTS.XL]} 
              xxl={24/BREAKPOINT_COLS[BREAKPOINTS.XXL]}>
              <HeroCard {...item} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    )
  );
};

export default React.memo(HeroList);
