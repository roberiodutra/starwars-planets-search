import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function AppliedFilters() {
  const {
    filter,
    setFilter,
    filteredColumns,
    setFilteredColumns,
  } = useContext(PlanetsContext);

  function onHandleClick(column) {
    const returnedColumn = [...filteredColumns, column];
    setFilteredColumns(returnedColumn);

    const returnedFilter = filter.filterByNumericValues
      .filter((item) => item.column !== column);

    setFilter({ ...filter,
      filterByNumericValues: [...returnedFilter],
    });
  }

  return (
    <section className="appliedFilters">
      {filter.filterByNumericValues
        .map(({ comparison, column, value }, i) => (
          <div
            key={ i }
            data-testid="filter"
          >
            <p className="btn btn-outline-secondary">
              {`${column} ${comparison} ${value} `}
            </p>
            <button
              key={ `button-${i}` }
              type="button"
              onClick={ () => onHandleClick(column) }
            >
              <img src="trash.png" alt="trash" />
            </button>
          </div>
        ))}
    </section>
  );
}

export default AppliedFilters;
