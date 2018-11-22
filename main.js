// const example = [
//   ['Bob', 'John'],
//   ['banana', 'orange'],
//   ['hammer', 'nail']
// ]

// console.log(example[0][1]);

// let item = example[1][1];

// console.log(item);

// example [2][1] = 'screwdriver';

// console.log(example);


const quiz = [
  ['What is the capital of the EU?', 'brussels'],
  ['Which country left the EU two years ago?', 'uk'],
  ['How many countries are now part of the EU?', '27'],
  ['What is the most populated coutry of the EU?', 'germany']
];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
  let answer = prompt(quiz[i][0]);
  let correctAnswer = answer.toLowerCase().trim();

  if (correctAnswer === quiz[i][1]) {
    score++;
  } else {
    alert(`Wrong answer. The correct answer is ${quiz[i][1]}`)
  }
}  

let correctPercent = (score/quiz.length) * 100;
alert(`You answered ${score} questions correctly and your correct percent is ${correctPercent}% !`)