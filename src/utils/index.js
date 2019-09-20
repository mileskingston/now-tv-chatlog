export const convertDateFormat = (timeStamp) => {
  const date = new Date(timeStamp);
  return date.toLocaleString();
};