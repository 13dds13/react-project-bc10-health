const getDateInFormat = (dateToChange) => {
  const date = dateToChange.getDate().toString().padStart(2, "0");
  const month = (dateToChange.getMonth() + 1).toString().padStart(2, "0");
  const year = dateToChange.getFullYear();

  return `${year}-${month}-${date}`;
};

export default getDateInFormat;
