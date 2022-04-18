import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterNumber() {
  const { filter, setFilter } = useContext(PlanetsContext);

  const filterByNumericValues = {
    column: 'population',
    comparison: 'maior que',
    value: '',
  };

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function onHandleChange({ target }) {
    filterByNumericValues.column = target.value;
    setFilter({ ...filter,
      filterByNumericValues,
    });
  }

  return (
    <select
      data-testid="column-filter"
      onChange={ onHandleChange }
    >
      {columns.map((item) => (
        <option key={ item } value={ item }>{ item }</option>
      ))}
    </select>
  );
}

export default FilterNumber;
