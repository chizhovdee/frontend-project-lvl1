import readlineSync from 'readline-sync';

let name;

function welcome() {
  console.log('Welcome to the Brain Games!');
}

function askAndSaveUserName() {
  name = readlineSync.question('May I have your name? ');
}

export function getUserName() {
  return name;
}

function greetUser() {
  console.log(`Hello, ${getUserName()}`);
}

export function startSession() {
  welcome();
  askAndSaveUserName();
  greetUser();
}
