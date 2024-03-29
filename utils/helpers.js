export function formatDate(date) {
  const dateFormatted = new Date(date);
  return dateFormatted.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "America/Vancouver",
  });
}
