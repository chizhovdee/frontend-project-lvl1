export function random(start, end) {
  return Math.floor(start + Math.random() * (end + 1 - start));
}

export function sample(arr) {
  return arr[random(0, arr.length - 1)];
}

const isMaxGcd = (numbers, value) => !numbers.some((n) => (n % value) !== 0);

export function gcd(...numbers) {
  let maxGcd = numbers.sort((a, b) => a - b)[0];

  while (maxGcd > 1) {
    if (isMaxGcd(numbers, maxGcd)) break;
    maxGcd -= 1;
  }

  return maxGcd;
}

export function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
