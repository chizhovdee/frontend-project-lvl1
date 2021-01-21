export function random(start, end) {
  return Math.floor(start + Math.random() * (end + 1 - start));
}

export function sample(arr) {
  return arr[random(0, arr.length - 1)];
}

export function gcd(...numbers) {
  let maxGcd = numbers.sort((a, b) => a - b)[0];

  while (maxGcd > 1) {
    const isMaxGcd = !numbers.some((n) => (n % maxGcd) !== 0);
    if (isMaxGcd) break;
    maxGcd -= 1;
  }

  return maxGcd;
}
