import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useFetch } from './useFetch';
import { useForm } from './useForm';
import { useBreakpointViewport } from './useBreakpointViewport';
import { heroMapper, getHeroesByName, getHeroesByPublisher } from '../utils/helpers';
import { BREAKPOINT_COLS, GRID_COLUMNS } from '../utils/constants';

export const useLoadHeroes = (history, publisher) => {
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
  const itemsByRow = Math.ceil(GRID_COLUMNS / BREAKPOINT_COLS[breakpoint]);
  const heroesFiltered = useMemo(() => {
    if (!data) {
      return Array(itemsByRow * 2).fill({});
    }

    let items = data.map((hero) => heroMapper(hero));
    if (publisher) {
      items = getHeroesByPublisher(items, publisher);
    }
    if (q) {
      items = getHeroesByName(items, q);
    }

    return items;
  }, [data, itemsByRow, publisher, q]);

  useEffect(() => {
    setQuery(q);
    setHeroes(heroesFiltered);
  }, [heroesFiltered, q]);

  return [heroes, itemsByRow * 4, query, searchText, handleInputChange, handleSearch, reset];
};
