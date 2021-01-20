import readlineSync from 'readline-sync';
import { startSession, getUserName } from './session.js';
import { random } from './utils.js';

const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;
const RIGHT_ANSWERS_COUNT = 3;
const STATUS = {
  init: 'init',
  played: 'played',
  won: 'win',
  lost: 'lost'
};
const ANSWER_STATUS = {
  waiting: 'waiting',
  right: 'right',
  wrong: 'wrong'
};

let score;
let status;
let answerStatus;

function printRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}
function setScore(value) {
  score = value;
}

function setStatus(value) {
  status = value;
}

function setAnswerStatus(value) {
  answerStatus = value;
}

function initialize() {
  setScore(0);
  setStatus(STATUS.played);
  setAnswerStatus(ANSWER_STATUS.waiting);
}

function getRightAnswer(number) {
  return (number % 2) === 0 ? 'yes' : 'no';
}

function processAnswers(userAnswer, rightAnswer) {
  if (userAnswer !== rightAnswer) {
    setStatus(STATUS.lost);
    setAnswerStatus(ANSWER_STATUS.wrong);
    return;
  }

  setAnswerStatus(ANSWER_STATUS.right);
  setScore(score + 1);

  if (score >= RIGHT_ANSWERS_COUNT) {
    setStatus(STATUS.won);
  }
}

function printStatusMessage(userAnswer, rightAnswer) {
  switch (status) {
    case STATUS.played:
      if (answerStatus === ANSWER_STATUS.right) {
        console.log('Correct!');
      }
      break;
    case STATUS.won:
      console.log(`Congratulations, ${getUserName()}!`);
      break;
    case STATUS.lost:
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${getUserName()}!`);
      break;
    default:
  }
}

function play() {
  setStatus(STATUS.played);

  while (status === STATUS.played) {
    const number = random(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    const rightAnswer = getRightAnswer(number);
    processAnswers(userAnswer, rightAnswer);
    printStatusMessage(userAnswer, rightAnswer);
    setAnswerStatus(ANSWER_STATUS.waiting);
  }
}

export function startEvenGame() {
  startSession();
  printRules();
  initialize();
  play();
}
