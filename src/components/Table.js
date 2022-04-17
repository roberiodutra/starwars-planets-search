import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  return (
    <table>{data}</table>
  );
}

export default Table;
