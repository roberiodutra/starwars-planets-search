function DynamicSort(data, selectColumn, setDataFiltered, radio) {
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
}

export default DynamicSort;
