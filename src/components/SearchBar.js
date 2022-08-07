import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import FilterName from '../filters/FilterName';
import FilterNumber from '../filters/FilterNumber';
import FilterSort from '../filters/FilterSort';
import AppliedFilters from './AppliedFilters';

function SearchBar() {
  const {
    setFilter,
    setFilteredColumns,
    moreInfo,
    setMoreInfo,
  } = useContext(PlanetsContext);

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

  function onHandleClick(e) {
    e.preventDefault();
    if (!moreInfo) {
      setMoreInfo(true);
    } else {
      setMoreInfo(false);
    }
  }

  return (
    <section className="searchBar">
      <FilterName />
      <FilterNumber />
      <FilterSort />
      <AppliedFilters />
      <div className="buttons">
        <button
          className="btn btn-outline-warning"
          type="button"
          data-testid="button-remove-filters"
          onClick={ clearFilters }
        >
          Remove Filters
        </button>
        <button
          className="btn btn-outline-warning"
          type="button"
          onClick={ onHandleClick }
        >
          More Info
        </button>
      </div>
    </section>
  );
}

export default SearchBar;
