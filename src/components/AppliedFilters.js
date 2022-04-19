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

  function onHandleClick({ column }) {
    const returnedColumn = [...filteredColumns, column];
    setFilteredColumns(returnedColumn);

    const returnedFilter = filter.filterByNumericValues
      .filter((item) => item.column !== column);

    setFilter({ ...filter,
      filterByNumericValues: [...returnedFilter],
    });

    if (filter.filterByNumericValues.length > 0) {
      setDataFiltered(data);
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
              onClick={ () => onHandleClick({ comparison, column, value }) }
            >
              X
            </button>
          </div>
        ))}
    </section>
  );
}

export default AppliedFilters;
