import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';
import { nFormatter, strFormatter, filmFormatter } from '../services/formatter';
import starWarsAPI from '../services/starWarsAPI';
import strConverter from '../services/strConverter';

function Table() {
  const {
    tableHeader,
    setData,
    filter,
    dataFiltered,
    moreInfo,
  } = useContext(PlanetsContext);

  const F = `first-info ${moreInfo ? 'hidden' : ''}`;
  const S = `second-info ${moreInfo ? '' : 'hidden'}`;

  useEffect(() => {
    async function dataAPI() {
      setData(await starWarsAPI());
    }
    dataAPI();
  }, [setData]);

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead className="table table-dark">
        <tr>
          {tableHeader && tableHeader.map((header, i) => {
            switch (true) {
            case tableHeader.indexOf(header) === 0:
              return <th key={ i }>{strConverter(header)}</th>;
            case tableHeader.indexOf(header) > +'8':
              return <th key={ i } className={ S }>{strConverter(header)}</th>;
            default:
              return <th key={ i } className={ F }>{strConverter(header)}</th>;
            }
          })}
        </tr>
      </thead>
      <tbody>
        {dataFiltered && dataFiltered.filter(({ name }) => name
          .includes(filter.filterByName.name))
          .map((planet) => (
            <tr key={ planet.name }>
              <th data-testid="planet-name">{planet.name}</th>
              <td className={ F }>{planet.rotation_period}</td>
              <td className={ F }>{planet.orbital_period}</td>
              <td className={ F }>{planet.diameter}</td>
              <td className={ F }>{planet.climate}</td>
              <td className={ F }>{planet.gravity}</td>
              <td className={ F }>{planet.terrain}</td>
              <td className={ F }>{planet.surface_water}</td>
              <td className={ F }>{nFormatter(planet.population)}</td>
              <td className={ S }>{filmFormatter(planet.films)}</td>
              <td className={ S }>{strFormatter(planet.created)}</td>
              <td className={ S }>{strFormatter(planet.edited)}</td>
              <td className={ S }>
                <a href={ planet.url }>
                  {`Planet ${planet.url.replace(/\D/g, '')}`}
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
