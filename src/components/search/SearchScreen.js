import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: q });
  const { searchText } = formValues;
  const heroesFilterd = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input type="text" name="searchText" className="form-control" autoComplete="off" placeholder="Find your heroe" value={searchText} onChange={handleInputChange} />
            <button type="submit" className="btn m-1 btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === '' && <div className="alert alert-info">Search a hero</div>}

          {q !== '' && !heroesFilterd.length && <div className="alert alert-danger">There is no a hero with {q}</div>}

          {heroesFilterd.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
