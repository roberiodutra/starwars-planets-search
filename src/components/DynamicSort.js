function DynamicSort(data, filter, setDataFiltered) {
  const { column, sort } = filter.order;
  const collator = new Intl.Collator('en', {
    numeric: true,
  });

  const dynamic = (neg) => (a, b) => neg + collator.compare(
    a[column], b[column],
  );

  switch (true) {
  case sort === 'DESC':
    setDataFiltered(data.sort(dynamic('-')));
    break;
  default:
    setDataFiltered(data.sort(dynamic('')));
  }

  const arr = [...data];

  for (let i = 0; i < data.length; i += 1) {
    if (arr[0][column] === 'unknown') {
      arr.push(arr.shift());
    }
  }
  setDataFiltered(arr);
}

export default DynamicSort;
