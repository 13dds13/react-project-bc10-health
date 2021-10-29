const getDateInFormat = (dateToChange) => {
  let date = dateToChange.getDate();
  let month = dateToChange.getMonth() + 1;
  const year = dateToChange.getFullYear();
  if (date < 10) date = `0${date}`;
  if (month < 10) month = `0${month}`;

  return `${year}-${month}-${date}`;
};

export default getDateInFormat;
