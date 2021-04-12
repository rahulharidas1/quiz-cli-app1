var readLineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readLineSync.question(chalk.magentaBright.bold('What is your name? '));
var score=0;
console.log(`Welcome ${chalk.yellow.bold(userName)}! I hope you've watched the Snyder Cut :) Let's get started!`);
console.log('-----------------------------')

function play(question,answer){
  var userAnswer = readLineSync.question(chalk.magentaBright.bold(question));
  console.log('Your answer:',userAnswer);
  if(userAnswer.toLowerCase()===answer.toLowerCase()){
    console.log(chalk.greenBright.bold.underline('You got that right!\n'));
    score+=1;
  }
  else{
    console.log(chalk.red.bold.underline('That\'s incorrect!'));
    console.log(chalk.greenBright('The correct answer is'),answer,'\n');
  }
  

}


highScores = [
  {
    name: "Ron",
    score: 5
  },
  {
    name: "Luke",
    score: 4
  }
]

questions = [
  {
    question: `When the mother boxes synchronize, what is it called?
    a. The Apocalypse
    b. The Holocaust
    c. Doom
    d. The Unity\n`,
    answer: 'd'
  },
  {
    question: `In Atlantis, we got to see Darkseid emit _________ from his eyes.
    a. Laser Beam
    b. Omega Beam
    c. Alpha Beam
    d. Heat Vision\n`,
    answer: 'b'
  },
  {
    question: `Who does Steppenwolf keep communicating to from his base?
    a. DeSaad
    b. Darkseid
    c. Lex Luthor
    d. Doomsday\n`,
    answer: 'a'
  },
  {
    question: `In the mid-credits scene, Lex Luthor reveals Batman's identity to?
    a. Deadshot
    b. Deathstroke
    c. Harley Quinn
    d. The Scarecrow\n`,
    answer: 'b'
  },
  {
    question: `In the end of the movie, we see Bruce Wayne in his lake side home being greeted by
    a. Green Lantern
    b. Hawkman
    c. Martian Manhunter
    d. Doctor Fate\n`,
    answer: 'c'
  },
  {
    question: `In Cyborg's vision, we see Superman hovering over Wayne Manor holding _______
    a. Batman's cowl
    b. Green Lantern ring
    c. Trident
    d. The Lasso of Truth\n`,
    answer: 'a'
  }
]
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log('---------------------');

console.log(chalk.bgCyan.bold(`You scored a total of ${score} out of 6!`));
console.log('---------------------');

for(var j =0;j<highScores.length;j++){
  if(score>highScores[j].score){
    console.log(`Congrats! you beat ${highScores[j].name}'s highscore of ${highScores[j].score}`);
  }
}