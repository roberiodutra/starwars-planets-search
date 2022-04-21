import React, { useContext, useState } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterSort() {
  const { tableHeader, setFilter, filter } = useContext(PlanetsContext);

  const [radioSelect, setRadioSelect] = useState('ASC');

  function updateOrder({ target: { name, value } }) {
    setFilter(
      { ...filter, order: { ...filter.order, [name]: value } },
    );
  }

  return (
    <section>
      <select
        name="column"
        data-testid="column-sort"
        onChange={ updateOrder }
      >
        {tableHeader && tableHeader.map((opt, i) => (
          <option key={ i } value={ opt }>{opt}</option>))}
      </select>
      <label htmlFor="column-sort-input">
        <input
          name="column-sort-input"
          id="column-sort-input"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ (e) => setRadioSelect(e.target.value) }
        />
        Ascending
      </label>
      <label htmlFor="radio-sort-input">
        <input
          name="column-sort-input"
          id="radio-sort-input"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DESC"
          onChange={ (e) => setRadioSelect(e.target.value) }
        />
        Descending
      </label>
      <button
        name="sort"
        type="button"
        value={ radioSelect }
        data-testid="column-sort-button"
        onClick={ updateOrder }
      >
        Order
      </button>
    </section>
  );
}

export default FilterSort;
