import { runGame, GAMES } from './index.js';

export default {
  runGreeting: () => runGame(),
  runEvenGame: () => runGame(GAMES.even),
  runCalcGame: () => runGame(GAMES.calc),
  runGcdGame: () => runGame(GAMES.gcd),
  runProgressionGame: () => runGame(GAMES.progression),
  runPrimeGame: () => runGame(GAMES.prime),
};
