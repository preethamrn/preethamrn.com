import { format, utcToZonedTime } from "date-fns-tz";

export function formatDate(dateStr, formatStr = "d MMMM yyyy") {
  const date = utcToZonedTime(new Date(dateStr));
  return format(date, formatStr, { timeZone: "UTC" });
}
