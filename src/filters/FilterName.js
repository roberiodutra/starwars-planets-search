import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function FilterName() {
  const { filterName, setFilterName } = useContext(PlanetsContext);

  function onHandleChange({ target }) {
    setFilterName({ ...filterName,
      filterByName: { name: target.value },
    });
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filterName.filterByName.name }
      placeholder="Planet Search"
      onChange={ onHandleChange }
    />
  );
}

export default FilterName;
