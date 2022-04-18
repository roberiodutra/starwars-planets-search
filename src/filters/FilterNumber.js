import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterNumber() {
  const { filter, setFilter } = useContext(PlanetsContext);

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisons = ['maior que', 'menor que', 'igual a'];

  function onHandleChange({ target: { value, name } }) {
    setFilter({ ...filter,
      filterByNumericValues: [{
        ...filter.filterByNumericValues[0],
        [name]: value,
      }],
    });
  }

  return (
    <section>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ onHandleChange }
      >
        {columns.map((column) => (
          <option key={ column } value={ column }>{ column }</option>
        ))}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ onHandleChange }
      >
        {comparisons.map((comparison) => (
          <option key={ comparison } value={ comparison }>{ comparison }</option>
        ))}
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ onHandleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick="{}"
      >
        Filter
      </button>
    </section>
  );
}

export default FilterNumber;
