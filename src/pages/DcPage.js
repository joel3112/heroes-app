import React from 'react';
import HeroHeader from '../components/heroes/HeroHeader';
import SearchForm from '../components/search/SearchForm';
import HeroList from '../components/heroes/HeroList';
import { Affix } from 'antd';
import { Text } from '../styles';
import { useLoadHeroes } from '../hooks/useLoadHeroes';

const DcPage = ({ history, container }) => {
  const maxHeroesByPage = 18;
  const [
    heroes, 
    q, 
    searchText, 
    handleInputChange, 
    handleSearch
  ] = useLoadHeroes(history, 'DC', maxHeroesByPage);

  return (
    <div className="container page-container">
      <Affix target={() => container}>
        <HeroHeader title="DC Heroes">
          <SearchForm 
            handleInputChange={handleInputChange} 
            searchText={searchText} 
            handleSearch={handleSearch} />
        </HeroHeader>        
      </Affix>

      <div className="animate__animated animate__fadeIn">
        <HeroList heroes={heroes} maxHeroesByPage={maxHeroesByPage} />

        {q !== '' && !heroes.length && <Text size={25}>There are no results with search "{q}".</Text>}
      </div>
    </div>
  );
};

export default DcPage;
