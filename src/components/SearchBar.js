import React from 'react';
import FilterName from '../filters/FilterName';
import FilterNumber from '../filters/FilterNumber';

function SearchBar() {
  return (
    <section>
      <FilterName />
      <FilterNumber />
    </section>
  );
}

export default SearchBar;
