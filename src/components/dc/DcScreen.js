import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetch } from '../../hooks/useFetch';
import { heroMapper } from '../data/heroMapper';
import HeroList from '../heroes/HeroList';
import HeroListSkeleton from '../heroes/HeroListSkeleton';

const DcScreen = ({ history }) => {
  const location = useLocation();
  const { page } = queryString.parse(location.search);
  const onChangePage = (page) => {
    history.push(`?page=${page}`);
  };
  if (!page) {
    onChangePage(1);
  }

  const { data, loading } = useFetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  let heroes = Array(8).fill({});

  if (data) {
    heroes = data.map((hero) => heroMapper(hero));
  }

  return (
    <div>
      <h4>DC HEROES</h4>
      <hr />

      <div className="animate__animated animate__fadeIn">
        {loading && <HeroListSkeleton heroes={heroes} />}
        {!loading && <HeroList heroes={heroes} publisher="DC" onChangePage={onChangePage} />}
      </div>
    </div>
  );
};

export default DcScreen;
