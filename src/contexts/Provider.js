import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState();
  const [dataFiltered, setDataFiltered] = useState();
  const [tableHeader, setTableHeader] = useState();
  const [radio, setRadio] = useState();
  const [selectColumn, setSelectColumn] = useState('name');
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: {
      column: selectColumn,
      sort: radio,
    },
  });

  const [filteredColumns, setFilteredColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  useEffect(() => {
    const headers = [];
    if (data) {
      Object.keys(data[0])
        .filter((text) => text !== 'residents')
        .forEach((header) => (
          headers.push(header)
        ));
      setTableHeader(headers);
    }
  }, [setDataFiltered, data, selectColumn, radio]);

  const context = {
    data,
    setData,
    tableHeader,
    filter,
    setFilter,
    dataFiltered,
    setDataFiltered,
    filteredColumns,
    setFilteredColumns,
    radio,
    setRadio,
    selectColumn,
    setSelectColumn,
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
