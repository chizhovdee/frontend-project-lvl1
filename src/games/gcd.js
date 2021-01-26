import { random, gcd } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

export function generateQuestion() {
  return [
    random(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER),
    random(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER),
  ];
}

export function getRightAnswerBy(numbers) {
  return gcd(...numbers);
}

export function getQuestionMessage(numbers) {
  return numbers.join(' ');
}
