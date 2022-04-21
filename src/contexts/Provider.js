import React, { useCallback, useEffect, useState } from 'react';
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

  const dynamicSort = useCallback(() => {
    const collator = new Intl.Collator('en', {
      numeric: true,
    });

    const dynamic = (neg) => (a, b) => neg + collator.compare(
      a[selectColumn], b[selectColumn],
    );

    switch (true) {
    case radio === 'DESC':
      setDataFiltered(data.sort(dynamic('-')));
      break;
    default:
      setDataFiltered(data.sort(dynamic('')));
    }

    const arr = [...data];

    for (let i = 0; i < data.length; i += 1) {
      if (arr[0][selectColumn] === 'unknown') {
        arr.push(arr.shift());
      }
    }
    setDataFiltered(arr);
  }, [data, radio, selectColumn]);

  useEffect(() => {
    const headers = [];
    if (data) {
      Object.keys(data[0])
        .filter((text) => text !== 'residents')
        .forEach((header) => (
          headers.push(header)
        ));
      setTableHeader(headers);
      dynamicSort();
    }
  }, [setDataFiltered, data, selectColumn, radio, dynamicSort]);

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
