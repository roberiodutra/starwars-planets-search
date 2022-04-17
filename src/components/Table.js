import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import starWarsAPI from '../services/starWarsAPI';

function Table() {
  const { data, setData } = useContext(PlanetsContext);

  useEffect(() => {
    async function dataAPI() {
      setData(await starWarsAPI());
    }
    dataAPI();
  }, [setData]);

  console.log(data)

  return (
    <table>test</table>
  );
}

export default Table;
