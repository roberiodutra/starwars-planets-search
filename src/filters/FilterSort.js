import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterSort() {
  const { filter, setFilter } = useContext(PlanetsContext);

  return (
    <section>
      <p>Sort</p>
    </section>
  );
}

export default FilterSort;
