export function getCurrentDate() {
  return new Date().toLocaleDateString();
}

export function getWeekNumber() {
  const date = new Date();
  const start = new Date(date.getFullYear(), 0, 1);
  const diff = date - start;
  return Math.ceil(diff / (7 * 24 * 60 * 60 * 1000));
}

export function getMonth() {
  return new Date().toLocaleString("default", { month: "long" });
}

export function getYear() {
  return new Date().getFullYear();
}
