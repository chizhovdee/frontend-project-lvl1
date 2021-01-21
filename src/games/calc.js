import { random, sample } from '../utils.js';
import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../settings.js';

const OPERATIONS = ['+', '-', '*'];

export function generateQuestion() {
  return [
    random(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER), // first operand
    sample(OPERATIONS), // operation
    random(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER), // second operand
  ];
}

export function getRightAnswerBy([first, operation, second]) {
  switch (operation) {
    case '+': return first + second;
    case '-': return first - second;
    case '*': return first * second;
    default:
      return null;
  }
}

export function getQuestionMessage([first, operation, second]) {
  return `${first} ${operation} ${second}`;
}
