import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../utils/getHeroesByName';

export const useSearch = (history, totalItems) => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // setQuery(searchText);

    console.log(e);
    // history.push(`?q=${query}`);
  };

  // const heroes = useMemo(() => {
  //   if (q) {
  //     items = getHeroesByName(totalItems, q);
  //   }
  //   return items;
  // }, [data, q]);

  useEffect(() => {
    setItems(getHeroesByName(totalItems, query));
  
    const { q = '' } = queryString.parse(location.search);  
    setQuery(q);
  }, [location.search, query, totalItems]);

  return [query, items, handleSearch];
};
