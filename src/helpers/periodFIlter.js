const periodFilter = (options, data) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // console.log(options);

  if (options === null || options === undefined) {
    console.log('Null or Undefined');

    return [];
  }
  if (options === 'week') {
    console.log('Sending data for week');
    return [];
  }
  if (options === 'month') {
    console.log('Sending data for month');

    return data.filter(el => Number(el.date.split('-')[1]) === month);
  }
  if (options === 'total') {
    console.log('Returning total');

    return data;
  }
};

export default periodFilter;
