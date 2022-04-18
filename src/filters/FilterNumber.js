import React, { useContext, useState } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterNumber() {
  const { data, filter, setFilter, setDataFiltered } = useContext(PlanetsContext);
  const comparisons = ['maior que', 'menor que', 'igual a'];
  const [filterCover, setFilterCover] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const { comparison, column, value } = filterCover;

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function onHandleChange({ target }) {
    setFilterCover({ ...filterCover, [target.name]: target.value });
  }

  function onHandleClick(e) {
    e.preventDefault();

    switch (comparison) {
    case 'maior que':
      setDataFiltered(data.filter((item) => Number(item[column]) > Number(value)));
      break;
    case 'menor que':
      setDataFiltered(data.filter((item) => Number(item[column]) < Number(value)));
      break;
    case 'igual a':
      setDataFiltered(data.filter((item) => Number(item[column]) === Number(value)));
      break;
    default:
      console.error('xablau');
    }

    setFilter({ ...filter,
      filterByNumericValues: [...filter.filterByNumericValues, { ...filterCover,
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
        {columns.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        ))}
      </select>

      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ onHandleChange }
      >
        {comparisons.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        ))}
      </select>

      <input
        name="value"
        type="number"
        defaultValue={ 0 }
        data-testid="value-filter"
        onChange={ onHandleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ onHandleClick }
      >
        Filter
      </button>
    </section>
  );
}

export default FilterNumber;
