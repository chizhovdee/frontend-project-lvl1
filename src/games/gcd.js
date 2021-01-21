import { random, gcd } from '../utils.js';
import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../settings.js';

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
