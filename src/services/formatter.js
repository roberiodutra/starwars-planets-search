import React from 'react';

export function filmFormatter(film) {
  return film.map(
    (item, i) => (
      <p key={ i }>
        <a href={ item }>
          {`Film ${item.replace(/\D/g, '')}`}
        </a>
      </p>
    ),
  );
}

export function strFormatter(str) {
  return str.split('T').map((item, i) => {
    if (item.length < +'11') {
      return <p key={ i }>{`Date: ${item}`}</p>;
    }
    return <p key={ i }>{`Time: ${item.substring(0, '8')}`}</p>;
  });
}

export function nFormatter(num) {
  const B = 1000000000;
  const M = 1000000;
  const K = 1000;
  switch (true) {
  case num >= B:
    return `${(num / B).toFixed(1).replace(/\.0$/, '')}B`;
  case num >= M:
    return `${(num / M).toFixed(1).replace(/\.0$/, '')}M`;
  case num >= K:
    return `${(num / K).toFixed(1).replace(/\.0$/, '')}K`;
  default:
    return num;
  }
}
