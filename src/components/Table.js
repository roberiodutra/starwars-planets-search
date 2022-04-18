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

  // função para converter uma string
  // https://stackoverflow.com/questions/21792367/replace-underscores-with-spaces-and-capitalize-words

  function strConverter(string) {
    const split = string.split('_');
    for (let i = 0; i < split.length; i += 1) {
      split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    }
    return split.join(' ');
  }

  return (
    <table>
      <thead>
        <tr>
          {data && Object.keys(data[0])
            .filter((text) => text !== 'residents')
            .map((header) => (
              <th key={ header }>{strConverter(header)}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data && data.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
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
