import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterSort() {
  const {
    data, setData,
    dataFiltered,
    setDataFiltered,
    filter,
    setFilter,
    radio,
    setRadio,
    selectColumn,
    setSelectColumn } = useContext(PlanetsContext);

  function dynamicSort(prop) {
    return (a, b) => a[prop].localeCompare(b[prop]);
  }

  function applyOrder() {
    console.log(radio)
    switch (radio) {
    case 'DESC':
      setDataFiltered(dataFiltered
        .sort(dynamicSort(selectColumn)));
      break;
    default:
      setDataFiltered(dataFiltered
        .sort((a, b) => (a[selectColumn] > b[selectColumn])));
      break;
    }
  }

  return (
    <section>
      <select
        data-testid="column-sort"
        onChange={ (e) => setSelectColumn(e.target.value) }
      >
      </select>
      <label htmlFor="column-sort-input">
        <input
          name="column-sort-input"
          id="column-sort-input"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ (e) => setRadio(e.target.value) }
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
          onChange={ (e) => setRadio(e.target.value) }
        />
        Descending
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ applyOrder }
      >
        Order
      </button>
    </section>
  );
}

export default FilterSort;
