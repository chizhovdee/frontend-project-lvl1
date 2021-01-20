export const GAMES = {
  even: 'even',
  calc: 'calc'
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
  [GAMES.calc]: 'What is the result of the expression?'
};
