import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import FilterName from '../filters/FilterName';
import FilterNumber from '../filters/FilterNumber';
import FilterSort from '../filters/FilterSort';
import AppliedFilters from './AppliedFilters';

function SearchBar() {
  const { setFilter, setFilteredColumns } = useContext(PlanetsContext);

  function clearFilters() {
    setFilter({
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: {
        column: 'name',
        sort: 'ASC',
      },
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
      <FilterSort />
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
