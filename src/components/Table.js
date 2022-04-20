import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import starWarsAPI from '../services/starWarsAPI';

function Table() {
  const { tableHeader, setData, filter, dataFiltered } = useContext(PlanetsContext);

  useEffect(() => {
    async function dataAPI() {
      setData(await starWarsAPI());
    }
    dataAPI();
  }, [setData]);

  return (
    <table>
      <thead>
        <tr>
          {tableHeader && tableHeader.map((header, i) => (
            <th key={ i }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataFiltered !== undefined && dataFiltered
          .filter(({ name }) => name.includes(filter.filterByName.name))
          .map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
