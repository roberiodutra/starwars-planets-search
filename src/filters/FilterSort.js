import React, { useContext, useState } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterSort() {
  const {
    tableHeader,
    setRadio,
    setSelectColumn } = useContext(PlanetsContext);

  const [radioSelect, setRadioSelect] = useState('ASC');

  return (
    <section>
      <select
        data-testid="column-sort"
        onChange={ (e) => setSelectColumn(e.target.value) }
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
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setRadio(radioSelect) }
      >
        Order
      </button>
    </section>
  );
}

export default FilterSort;
