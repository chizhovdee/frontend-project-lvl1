import { random, isPrime } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 1000;

export function generateQuestion() {
  return random(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
}

export function getRightAnswerBy(number) {
  return isPrime(number) ? 'yes' : 'no';
}

export function getQuestionMessage(question) {
  return question;
}
