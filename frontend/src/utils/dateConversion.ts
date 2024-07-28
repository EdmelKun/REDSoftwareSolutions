import dayjs from "dayjs";

export const getMonthAndYear = (date: Date) => {
  return dayjs(date).format("MMMM YYYY");
};
