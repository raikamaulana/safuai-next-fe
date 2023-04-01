import { format } from "date-fns";

function FormattedDate({ dateString }) {
  const date = new Date(dateString);
  const formattedDate = format(date, "yyyy, MMMM, dd HH:mm:ss");

  return <span>{formattedDate}</span>;
}

export default FormattedDate;
