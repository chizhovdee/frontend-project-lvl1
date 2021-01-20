import readlineSync from 'readline-sync';
import games from './games/index.js';
import { startSession, getUserName } from './session.js';
import { RIGHT_ANSWERS_COUNT } from './settings.js';
import { GAMES, GAME_STATUS, ANSWER_STATUS } from './constants.js';

let gameType;
let score;
let gameStatus;
let answerStatus;

function printRules() {
  switch (gameType) {
    case GAMES.even:
      console.log(games.even.getRule());
      break;
    case GAMES.calc:
      console.log(games.calc.getRule());
      break;
    default:
  }
}

function setGameType(value) {
  gameType = value;
}

function setScore(value) {
  score = value;
}

function setGameStatus(value) {
  gameStatus = value;
}

function setAnswerStatus(value) {
  answerStatus = value;
}

function initialize(game) {
  setGameType(game);
  setScore(0);
  setGameStatus(GAME_STATUS.played);
  setAnswerStatus(ANSWER_STATUS.waiting);
}

function generateQuestion() {
  switch (gameType) {
    case GAMES.even:
      return games.even.generateQuestion();
    case GAMES.calc:
      return games.calc.generateQuestion();
    default:
      return null;
  }
}

function getRightAnswerBy(question) {
  switch (gameType) {
    case GAMES.even:
      return games.even.getRightAnswerBy(question);
    case GAMES.calc:
      return games.calc.getRightAnswerBy(question);
    default:
      return null;
  }
}

function getQuestionMessage(question) {
  switch (gameType) {
    case GAMES.even:
      return games.even.getQuestionMessage(question);
    case GAMES.calc:
      return games.calc.getQuestionMessage(question);
    default:
      return null;
  }
}

function processAnswers(userAnswer, rightAnswer) {
  if (userAnswer.toString() !== rightAnswer.toString()) {
    setGameStatus(GAME_STATUS.lost);
    setAnswerStatus(ANSWER_STATUS.wrong);
    return;
  }

  setAnswerStatus(ANSWER_STATUS.right);
  setScore(score + 1);

  if (score >= RIGHT_ANSWERS_COUNT) {
    setGameStatus(GAME_STATUS.won);
  }
}

function printStatusMessage(userAnswer, rightAnswer) {
  switch (gameStatus) {
    case GAME_STATUS.played:
      if (answerStatus === ANSWER_STATUS.right) {
        console.log('Correct!');
      }
      break;
    case GAME_STATUS.won:
      console.log(`Congratulations, ${getUserName()}!`);
      break;
    case GAME_STATUS.lost:
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${getUserName()}!`);
      break;
    default:
  }
}

function play() {
  setGameStatus(GAME_STATUS.played);

  while (gameStatus === GAME_STATUS.played) {
    const question = generateQuestion();
    const userAnswer = readlineSync.question(`Question: ${getQuestionMessage(question)} `);
    const rightAnswer = getRightAnswerBy(question);
    processAnswers(userAnswer, rightAnswer);
    printStatusMessage(userAnswer, rightAnswer);
    setAnswerStatus(ANSWER_STATUS.waiting);
  }
}

const runGame = (game) => {
  startSession();
  if (!game) return;

  initialize(game);
  printRules();
  play();
};

export {
  runGame,
  GAMES
};