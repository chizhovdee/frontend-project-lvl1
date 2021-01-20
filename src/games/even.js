import { random } from '../utils.js';
import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../settings.js';

export function getRule() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

export function generateQuestion() {
  return random(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
}

export function getRightAnswerBy(question) {
  return (question % 2) === 0 ? 'yes' : 'no';
}

export function getQuestionMessage(question) {
  return question;
}
