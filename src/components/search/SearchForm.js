import React from 'react';
import { Search } from '../../styles';

const SearchForm = ({ handleSearch, handleInputChange, searchText }) => {
  return (
    <Search
      style={{ maxWidth: 400 }}
      name="searchText"
      placeholder="Find your heroe"
      enterButton="Search"
      size="large"
      value={searchText}
      onChange={handleInputChange}
      onSearch={handleSearch}
    />
  );
};

export default SearchForm;
