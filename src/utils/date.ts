export const getISOString = (date?: Date) => (date ?? new Date()).toISOString();

export const getDateTimeString = (date?: Date) => {
  const _date = date ?? new Date();
  const year = _date.getFullYear();
  const month = `${_date.getMonth() + 1}`.padStart(2, "0");
  const day = `${_date.getDate()}`.padStart(2, "0");
  const hours = `${_date.getHours()}`.padStart(2, "0");
  const minutes = `${_date.getMinutes()}`.padStart(2, "0");
  const seconds = `${_date.getSeconds()}`.padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
