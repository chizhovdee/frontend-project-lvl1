import readlineSync from 'readline-sync';

export function greeting() {
  console.log('Welcome to the Brain Games!');
}

export function gettingToKnow() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
}
