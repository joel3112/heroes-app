import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetch } from './useFetch';
import { useForm } from './useForm';
import { useBreakpointViewport } from './useBreakpointViewport';
import { heroMapper, getHeroesByName, getHeroesByPublisher } from '../utils/helpers';
import { BREAKPOINT_COLS } from '../utils/constants';

export const useLoadHeroes = (history, publisher, defaultRows = 2) => {
  const [heroes, setHeroes] = useState([]);
  const [query, setQuery] = useState('');
  const breakpoint = useBreakpointViewport();

  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange, reset] = useForm({ searchText: q });
  const { searchText } = formValues;

  const handleSearch = () => {
    history.push(`?q=${searchText}`);
  };

  const { data } = useFetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  const heroesFiltered = useMemo(() => {
    if (!data) {
      return Array(BREAKPOINT_COLS[breakpoint] * defaultRows).fill({});
    }

    let items = data.map((hero) => heroMapper(hero));
    if (publisher) {
      items = getHeroesByPublisher(items, publisher);
    }
    if (q) {
      items = getHeroesByName(items, q);
    }

    return items;
  }, [breakpoint, data, publisher, q, defaultRows]);

  useEffect(() => {
    setQuery(q);
    setHeroes(heroesFiltered);
  }, [heroesFiltered, q]);

  return [heroes, query, searchText, handleInputChange, handleSearch, reset];
};
