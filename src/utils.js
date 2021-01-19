export function random(start, end) {
  return Math.floor(start + Math.random() * (end + 1 - start));
}
