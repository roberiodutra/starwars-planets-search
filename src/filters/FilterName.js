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
    <div className="search">
      <input
        className="mr-sm-2"
        type="search"
        placeholder="Search"
        data-testid="name-filter"
        value={ filter.filterByName.name }
        onChange={ onHandleChange }
      />
    </div>
  );
}

export default FilterName;
