import readlineSync from 'readline-sync';

let name;

export function welcome() {
  console.log('Welcome to the Brain Games!');
}

export function askAndSaveUserName() {
  name = readlineSync.question('May I have your name? ');
}

export function getUserName() {
  return name;
}

export function greetUser() {
  console.log(`Hello, ${getUserName()}`);
}
