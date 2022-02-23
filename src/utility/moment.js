import moment from "moment";
const defaultFormat = "DD/MM/yyyy hh:mm a";

export const formatDate = (date, format = defaultFormat) => {
  return moment(date).format(format);
};
