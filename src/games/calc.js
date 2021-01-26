import { random, sample } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;
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
