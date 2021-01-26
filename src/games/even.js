import { random } from '../utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

export function generateQuestion() {
  return random(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
}

export function getRightAnswerBy(question) {
  return (question % 2) === 0 ? 'yes' : 'no';
}

export function getQuestionMessage(question) {
  return question;
}
