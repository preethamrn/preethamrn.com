import { format } from "date-fns";

export function formatDate(dateStr, formatStr = "d MMMM yyyy") {
  return format(new Date(dateStr), formatStr, { timeZone: "UTC" });
}
