import { format } from "date-fns";

export function formatDate(date: Date | undefined) {
  if (!date) {
    return null;
  }
  let newDate = new Date(date);
  return format(newDate, "dd MMM yyyy");
}

export function formatDateWithTime(date: Date | undefined) {
  if (!date) {
    return null;
  }
  let newDate = new Date(date);
  return format(newDate, "dd MMM yyyy HH:mm:ss");
}
