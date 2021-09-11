import React from 'react';
import './SearchForm.css';

const SearchForm = ({ handleSearch, handleInputChange, searchText }) => {
  return (
    <form onSubmit={handleSearch} className="form d-flex align-items-center justify-content-between">
      <input type="text" name="searchText" className="form-control" autoComplete="off" placeholder="Find your heroe" value={searchText} onChange={handleInputChange} />
      <button type="submit" className="btn m-1 btn-block btn-outline-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
