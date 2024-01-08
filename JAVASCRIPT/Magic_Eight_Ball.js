/*In this project we will build a Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.*/

let userName='';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion='What is 2+2 ?';

console.log(`${userQuestion} ${userName}`);

let randomNumber=Math.floor(Math.random() * 8);

let eightBall='';
switch(randomNumber){
  case 0:
  eightBall='It is certain';
  break;
  case 1:
  eightBall='It is decidedly so';
  break;
  case 2:
  eightBall='Reply hazy try again';
  break;
  case 3:
  eightBall='Cannot predict now';
  break;
  case 4:
  eightBall='Do not count on it';
  break;
  case 5:
  eightBall='Do not count on it';
  break;
  case 6:
  eightBall='My sources say no';
  break;
  case 7:
  eightBall='Outlook not so good';
  break;
  default:
  eightBall='Next Time plz';
  break;

}
console.log(`${eightBall}`);

