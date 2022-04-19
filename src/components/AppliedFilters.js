import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function AppliedFilters() {
  const {
    filter,
    setFilter,
    setDataFiltered,
    dataFiltered,
    filteredColumns,
    setFilteredColumns,
  } = useContext(PlanetsContext);

  function removeFilter(comparison, column, value) {
    filter.filterByNumericValues.forEach((elem) => {
      switch (comparison) {
      case 'maior que':
        setDataFiltered(dataFiltered.filter(
          (item) => Number(item[column]) < Number(value),
        ));
        break;
      case 'menor que':
        setDataFiltered(dataFiltered.filter(
          (item) => Number(item[column]) > Number(value),
        ));
        break;
      case 'igual a':
        setDataFiltered(dataFiltered.filter(
          (item) => Number(item[column]) !== Number(value),
        ));
        break;
      default:
        console.error('xablau');
      }
    });
  }

  function onHandleClick(comparison, column, value) {
    const returnedColumn = [...filteredColumns, column];
    setFilteredColumns(returnedColumn);

    const returnedFilter = filter.filterByNumericValues
      .filter((item) => item.column !== column);

    setFilter({ ...filter,
      filterByNumericValues: [...returnedFilter],
    });
    removeFilter(comparison, column, value);
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
