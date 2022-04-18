import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterName() {
  const { filter, setFilter } = useContext(PlanetsContext);

  function onHandleChange({ target }) {
    setFilter({ ...filter,
      filterByName: { name: target.value },
    });
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filter.filterByName.name }
      placeholder="Planet Search"
      onChange={ onHandleChange }
    />
  );
}

export default FilterName;
