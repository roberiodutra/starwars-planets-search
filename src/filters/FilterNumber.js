import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterNumber() {
  const { data, filter, setFilter, setDataFiltered } = useContext(PlanetsContext);
  const comparisons = ['maior que', 'menor que', 'igual a'];
  const { column, comparison, value } = filter.filterByNumericValues[0];

  let filterCover = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };

  const columns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function onHandleChange({ target }) {
    filterCover = { ...filterCover, [target.name]: target.value };
  }

  function onHandleClick() {
    setFilter({ ...filter,
      filterByNumericValues: [...filter.filterByNumericValues, { ...filterCover,
      }],
    });

    if (data) {
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
    }
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
