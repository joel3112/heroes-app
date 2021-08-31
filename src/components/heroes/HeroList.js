import React, { useMemo } from 'react';
import HeroCard from './HeroCard';
import Pagination from '../ui/Pagination';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { getHeroesByPage } from '../../selectors/getHeroesByPage';

const HeroList = ({ heroes, publisher, onChangePage }) => {
  const location = useLocation();
  const { page } = queryString.parse(location.search);
  if (!page) {
    onChangePage(1);
  }
  const currentPage = parseInt(page);

  const heroesByPublisher = useMemo(() => getHeroesByPublisher(heroes, publisher), [heroes, publisher]);

  const maxHeroesByPage = 8;
  const numPages = Math.ceil(heroesByPublisher.length / maxHeroesByPage);
  const heroesByPage = getHeroesByPage(heroesByPublisher, currentPage, maxHeroesByPage);

  if (currentPage > numPages) {
    onChangePage(numPages);
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-5 g-4 mb-5">
        {heroesByPage.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination current={currentPage} total={numPages} />
      </div>
    </>
  );
};

export default HeroList;
