import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import FilterName from '../filters/FilterName';
import FilterNumber from '../filters/FilterNumber';
import AppliedFilters from './AppliedFilters';

function SearchBar() {
  const { setFilter, setFilteredColumns } = useContext(PlanetsContext);

  function clearFilters() {
    setFilter({
      filterByName: { name: '' },
      filterByNumericValues: [],
    });
    setFilteredColumns([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);
  }

  return (
    <section>
      <FilterName />
      <FilterNumber />
      <AppliedFilters />
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ clearFilters }
      >
        Remove Filters
      </button>
    </section>
  );
}

export default SearchBar;
