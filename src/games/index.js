import readlineSync from 'readline-sync';
import * as even from './even.js';
import * as calc from './calc.js';
import { GAMES } from '../constants.js';

function getGameBy(gameType) {
  switch (gameType) {
    case GAMES.even: return even;
    case GAMES.calc: return calc;
    default: return null;
  }
}

export function playRound(gameType) {
  const game = getGameBy(gameType);
  const question = game.generateQuestion();
  const userAnswer = readlineSync.question(`Question: ${game.getQuestionMessage(question)} `);
  const rightAnswer = game.getRightAnswerBy(question);

  return [userAnswer, rightAnswer];
}

export default {
  playRound
};
