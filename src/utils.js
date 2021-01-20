export function random(start, end) {
  return Math.floor(start + Math.random() * (end + 1 - start));
}

export function sample(arr) {
  return arr[random(0, arr.length - 1)];
}
