import { runGame, GAMES } from './index.js';

export default {
  runEvenGame: () => runGame(GAMES.even),
  runCalcGame: () => runGame(GAMES.calc),
  runGcdGame: () => runGame(GAMES.gcd),
  runGreeting: () => runGame()
};
