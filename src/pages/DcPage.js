import React from 'react';
import HeroList from '../components/heroes/HeroList';
import SearchForm from '../components/search/SearchForm';
import { useLoadHeroes } from '../hooks/useLoadHeroes';

const DcPage = ({ history }) => {
  const maxHeroesByPage = 15;
  const [
    heroes, 
    q, 
    searchText, 
    handleInputChange, 
    handleSearch
  ] = useLoadHeroes(history, 'DC', maxHeroesByPage);

  const emptyMessage = <div className="alert alert-info d-flex align-items-center">There is no a hero with "{q}"</div>;

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h4>DC HEROES</h4>
        <SearchForm 
          handleInputChange={handleInputChange} 
          searchText={searchText} 
          handleSearch={handleSearch} />
      </div>
      <hr />

      <div className="animate__animated animate__fadeIn">
        <HeroList heroes={heroes} maxHeroesByPage={maxHeroesByPage} />

        {q !== '' && !heroes.length && emptyMessage}
      </div>
    </div>
  );
};

export default DcPage;
