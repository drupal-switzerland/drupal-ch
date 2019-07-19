export function generateRandomId() {
  return String(Date.now()) + Math.floor(Math.random() * 10000);
}
