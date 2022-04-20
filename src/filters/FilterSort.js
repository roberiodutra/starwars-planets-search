import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterSort() {
  const { filter, setFilter } = useContext(PlanetsContext);

  return (
    <section>
      <select
        data-testid="column-sort"
        onChange={}
      >
      </select>
      <label htmlFor="column-sort-input">
        <input
          name="column-sort-input"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={}
        />
        Ascending
        <input
          name="column-sort-input"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={}
        />
        Descending
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={}
      >
        Order
      </button>
    </section>
  );
}

export default FilterSort;
