import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function AppliedFilters() {
  const {
    data,
    filter,
    setFilter,
    filteredColumns,
    setFilteredColumns,
    setDataFiltered,
    dataFiltered,
  } = useContext(PlanetsContext);

  function onHandleClick(comparison, column, value) {
    const returnedColumn = [...filteredColumns, column];
    setFilteredColumns(returnedColumn);

    const returnedFilter = filter.filterByNumericValues
      .filter((item) => item.column !== column);

    setFilter({ ...filter,
      filterByNumericValues: [...returnedFilter],
    });

    switch (true) {
    case filter.filterByNumericValues.length === 1:
      setDataFiltered(data);
      break;
    case comparison === 'maior que':
      setDataFiltered(dataFiltered.concat(data.filter(
        (item) => Number(item[column]) < Number(value),
      )));
      break;
    case comparison === 'menor que':
      setDataFiltered(dataFiltered.concat(data.filter(
        (item) => Number(item[column]) > Number(value),
      )));
      break;
    case comparison === 'igual a':
      setDataFiltered(dataFiltered.concat(data.filter(
        (item) => Number(item[column]) === Number(value),
      )));
      break;
    default:
      console.error('xablau');
    }
  }

  return (
    <section>
      {filter.filterByNumericValues
        .map(({ comparison, column, value }, i) => (
          <div
            key={ i }
            data-testid="filter"
          >
            {`${column} ${comparison} ${value} `}
            <button
              key={ `button-${i}` }
              type="button"
              onClick={ () => onHandleClick(comparison, column, value) }
            >
              X
            </button>
          </div>
        ))}
    </section>
  );
}

export default AppliedFilters;
