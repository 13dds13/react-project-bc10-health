const getDateInFormat = (dateToChange) => {
  const date = dateToChange.getDate();
  const month = dateToChange.getMonth() + 1;
  const year = dateToChange.getFullYear();
  return `${year}-${month}-${date}`;
};

export default getDateInFormat;
