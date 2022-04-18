import React from 'react';
import FilterName from '../filters/FilterName';
import FilterNumber from '../filters/FilterNumber';
import AppliedFilters from './AppliedFilters';

function SearchBar() {
  return (
    <section>
      <FilterName />
      <FilterNumber />
      <AppliedFilters />
    </section>
  );
}

export default SearchBar;
