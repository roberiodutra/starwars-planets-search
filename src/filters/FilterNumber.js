import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import DynamicSort from './DynamicSort';

function FilterNumber() {
  const {
    data,
    setDataFiltered,
    filter,
    setFilter,
    filteredColumns,
    setFilteredColumns,
  } = useContext(PlanetsContext);

  const comparisons = ['maior que', 'menor que', 'igual a'];
  const [filterCover, setFilterCover] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });

  function onHandleChange({ target }) {
    setFilterCover({ ...filterCover, [target.name]: target.value });
  }

  useEffect(() => {
    if (filteredColumns[0]) {
      setFilterCover((prev) => ({ ...prev,
        column: filteredColumns[0],
      }));
    }
  }, [filteredColumns]);

  useEffect(() => {
    let dataCover = data;

    filter.filterByNumericValues.forEach(
      ({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          dataCover = dataCover
            .filter((star) => +star[column] > +value);
          break;
        case 'menor que':
          dataCover = dataCover
            .filter((star) => +star[column] < +value);
          break;
        default:
          dataCover = dataCover
            .filter((star) => +star[column] === +value);
        }
      },
    );

    if (dataCover) {
      DynamicSort(dataCover, filter, setDataFiltered);
    }
  }, [data, filter, setDataFiltered]);

  function onHandleClick(e) {
    e.preventDefault();
    const columns = [...filteredColumns];
    columns.splice(filteredColumns.indexOf(filterCover.column), 1);
    setFilteredColumns(columns);

    const isColumn = filter.filterByNumericValues.every(
      (elem) => elem.column !== filterCover.column,
    );

    if (isColumn) {
      setFilter({ ...filter,
        filterByNumericValues: [...filter.filterByNumericValues, { ...filterCover,
        }],
      });
    }
  }

  return (
    <section className="filter-number">
      <select
        className="btn btn-outline-dark"
        name="column"
        data-testid="column-filter"
        onChange={ onHandleChange }
      >
        {filteredColumns.map((item, i) => (
          <option key={ i } value={ item }>{ item }</option>
        ))}
      </select>

      <select
        className="btn btn-outline-dark"
        name="comparison"
        data-testid="comparison-filter"
        onChange={ onHandleChange }
      >
        {comparisons.map((item) => (
          <option key={ item } value={ item }>{ item }</option>
        ))}
      </select>

      <input
        className="mr-sm-2"
        name="value"
        type="number"
        placeholder="value"
        value={ filterCover.value }
        data-testid="value-filter"
        onChange={ onHandleChange }
      />

      <button
        className="btn btn-outline-dark"
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
