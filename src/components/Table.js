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
    </table>
  );
}

export default Table;
