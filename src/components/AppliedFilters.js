import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function AppliedFilters() {
  const { filter } = useContext(PlanetsContext);
  return (
    <section>
      {filter.filterByNumericValues.slice(1).map(({ comparison, column, value }, i) => (
        <p key={ i }>{`${column} ${comparison} ${value}`}</p>
      ))}
    </section>
  );
}

export default AppliedFilters;
