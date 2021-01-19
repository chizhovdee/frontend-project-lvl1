import readlineSync from 'readline-sync';
import { startSession } from './session.js';
import { random } from './utils.js';

const RIGHT_ANSWERS_COUNT = 3;
const STATUS = {
  init: 'init',
  played: 'played',
  won: 'win',
  lost: 'lost'
};

let score;
let status;

function printRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}
function setScore(value) {
  score = value;
}

function setStatus(value) {
  status = value;
}

function initialize() {
  setScore(0);
  setStatus(STATUS.played);
}

function getRightAnswer(number) {
  return (number % 2) === 0 ? 'yes' : 'no';
}

function processAnswers(userAnswer, rightAnswer) {
  if (userAnswer !== rightAnswer) {
    setStatus(STATUS.lost);
    return;
  }

  setScore(score + 1);

  if (score >= RIGHT_ANSWERS_COUNT) {
    setStatus(STATUS.won);
  }
}

function play() {
  setStatus(STATUS.played);

  while (status === STATUS.played) {
    const number = random(1, 100);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    const rightAnswer = getRightAnswer(number);
    processAnswers(userAnswer, rightAnswer);
  }
}

export function runEvenGame() {
  startSession();
  printRules();
  initialize();
  play();
}
