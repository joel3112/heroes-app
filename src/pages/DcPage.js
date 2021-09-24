import React, { useContext } from 'react';
import { ContainerContext } from '../contexts/ContainerContext';
import HeroHeader from '../components/heroes/HeroHeader';
import SearchForm from '../components/search/SearchForm';
import HeroList from '../components/heroes/HeroList';
import { Affix } from 'antd';
import { Text } from '../styles';
import { useLoadHeroes } from '../hooks/useLoadHeroes';

const DcPage = ({ history }) => {
  const { container } = useContext(ContainerContext);
  const [
    heroes, 
    maxHeroesByPage,
    q, 
    searchText, 
    handleInputChange, 
    handleSearch
  ] = useLoadHeroes(history, 'DC');

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

        {q !== '' && !heroes.length && <Text size={1.4}>There are no results with search "{q}".</Text>}
      </div>
    </div>
  );
};

export default DcPage;
