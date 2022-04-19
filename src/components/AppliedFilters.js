import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function AppliedFilters() {
  const { filter } = useContext(PlanetsContext);
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
            >
              X
            </button>
          </div>
        ))}
    </section>
  );
}

export default AppliedFilters;
