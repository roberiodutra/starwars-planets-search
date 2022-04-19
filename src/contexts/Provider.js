import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState();
  const [dataFiltered, setDataFiltered] = useState();
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const [filteredColumns, setFilteredColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    if (data) {
      setDataFiltered(data);
    }
  }, [setDataFiltered, data]);

  const context = {
    data,
    setData,
    filter,
    setFilter,
    dataFiltered,
    setDataFiltered,
    filteredColumns,
    setFilteredColumns,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
