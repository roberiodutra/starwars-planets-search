import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState();
  const [bool, setBool] = useState(false);
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

  const context = { data, setData, filter, setFilter, bool, setBool };

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
