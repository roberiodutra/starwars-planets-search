import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState();
  const [bool, setBool] = useState(false);
  const [dataFiltered, setDataFiltered] = useState();
  const [filter, setFilter] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });

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
    bool,
    setBool,
    dataFiltered,
    setDataFiltered,
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
