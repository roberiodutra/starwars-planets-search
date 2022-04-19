import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function AppliedFilters() {
  const { filter, filteredColumns, setFilteredColumns } = useContext(PlanetsContext);

  function onHandleClick(column) {
    const returnedColumn = [...filteredColumns, column];
    setFilteredColumns(returnedColumn);
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
              onClick={ () => onHandleClick(column) }
            >
              X
            </button>
          </div>
        ))}
    </section>
  );
}

export default AppliedFilters;
