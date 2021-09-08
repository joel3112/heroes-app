import React, { useState } from 'react';
import HeroCard from './HeroCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import {getHeroesByPage} from '../../utils/getHeroesByPage';

const HeroList = ({ heroes, maxHeroesByPage }) => {
  const heroesByPage = (page) => getHeroesByPage(heroes, page, maxHeroesByPage);

  const [page, setPage] = useState(1);
  const [state, setState] = useState({ items: heroesByPage(page) });

  const fetchMoreData = () => {
    setPage(page + 1);
    setState({ items: state.items.concat(heroesByPage(page + 1)) });
  };

  return (
    <>
      <InfiniteScroll 
        className="row row-cols-1 row-cols-md-5 g-4 mb-5" 
        dataLength={state.items.length} 
        next={fetchMoreData} 
        hasMore={true}
      >
        {state.items.map((item) => (
          <HeroCard key={item.id} {...item} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default HeroList;
