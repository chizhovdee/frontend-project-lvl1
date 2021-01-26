import { random } from '../utils.js';

const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 15;
const MIN_PROGRESSION_START = 1;
const MAX_PROGRESSION_START = 50;
const MIN_PROGRESSION_STEP = 2;
const MAX_PROGRESSION_STEP = 9;

let start;
let step;

export function generateQuestion() {
  const length = random(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const missingIndex = random(0, length - 1);
  start = random(MIN_PROGRESSION_START, MAX_PROGRESSION_START);
  step = random(MIN_PROGRESSION_STEP, MAX_PROGRESSION_STEP);

  return new Array(length)
    .fill(0)
    .map((_, index) => (missingIndex === index ? null : start + index * step));
}

export function getRightAnswerBy(numbers) {
  const missingIndex = numbers.indexOf(null);
  return start + missingIndex * step;
}

export function getQuestionMessage(numbers) {
  return numbers.map((i) => i || '..').join(' ');
}
