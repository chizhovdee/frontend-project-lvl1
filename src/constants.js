export const GAMES = {
  even: 'even',
  calc: 'calc',
  gcd: 'gcd',
  progression: 'progression',
  prime: 'prime'
};

export const GAME_STATUS = {
  init: 'init',
  played: 'played',
  won: 'win',
  lost: 'lost'
};

export const ANSWER_STATUS = {
  waiting: 'waiting',
  right: 'right',
  wrong: 'wrong'
};

export const RULES = {
  [GAMES.even]: 'Answer "yes" if the number is even, otherwise answer "no".',
  [GAMES.calc]: 'What is the result of the expression?',
  [GAMES.gcd]: 'Find the greatest common divisor of given numbers.',
  [GAMES.progression]: 'What number is missing in the progression?',
  [GAMES.prime]: 'Answer "yes" if given number is prime. Otherwise answer "no".'
};
