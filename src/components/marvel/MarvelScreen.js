import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetch } from '../../hooks/useFetch';
import { heroMapper } from '../data/heroMapper';
import HeroList from '../heroes/HeroList';
import HeroListSkeleton from '../heroes/HeroListSkeleton';
import { useForm } from '../../hooks/useForm';
import SearchForm from '../search/SearchForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

const MarvelScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: q });
  const { searchText } = formValues;
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  const maxHeroesByPage = 15;
  const { data, loading } = useFetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  const heroes = useMemo(() => {
    if (!data) {
      return Array(maxHeroesByPage).fill({});
    }

    let items = data.map((hero) => heroMapper(hero));
    items = getHeroesByPublisher(items, 'MARVEL');

    if (q) {
      items = getHeroesByName(items, q);
    }
    return items;
  }, [data, q]);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h4>MARVEL HEROES</h4>
        <SearchForm handleInputChange={handleInputChange} searchText={searchText} handleSearch={handleSearch} />
      </div>
      <hr />
      <div className="animate__animated animate__fadeIn">
        {loading && <HeroListSkeleton heroes={heroes} />}
        {!loading && <HeroList heroes={heroes} maxHeroesByPage={maxHeroesByPage} />}

        {q !== '' && !heroes.length && <div className="alert alert-info">There is no a hero with {q}</div>}
      </div>
    </div>
  );
};

export default MarvelScreen;
