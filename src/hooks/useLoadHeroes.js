import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetch } from './useFetch';
import { getHeroesByPublisher } from '../utils/getHeroesByPublisher';
import { getHeroesByName } from '../utils/getHeroesByName';
import { useForm } from './useForm';
import { heroMapper } from '../utils/heroMapper';

export const useLoadHeroes = (history, publisher, maxItemsByBlock) => {
  const [heroes, setHeroes] = useState([]);
  const [query, setQuery] = useState('');

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: q });
  const { searchText } = formValues;
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  const { data } = useFetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  const heroesFiltered = useMemo(() => {
    if (!data) {
      return Array(maxItemsByBlock).fill({});
    }

    let items = data.map((hero) => heroMapper(hero));
    items = getHeroesByPublisher(items, publisher);

    if (q) {
      items = getHeroesByName(items, q);
    }
    return items;
  }, [data, maxItemsByBlock, publisher, q]);

  useEffect(() => {
    setQuery(q);
    setHeroes(heroesFiltered);
  }, [heroesFiltered, q]);

  return [heroes, query, searchText, handleInputChange, handleSearch];
};
