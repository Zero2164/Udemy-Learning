//Loops
//Doing things repeatedly 
//Loops allow us to repeat code
//Print 'hello' 10 times
//Sum all numbers in an array

//There are multiple types:
//for loop 
//while loop 
//for ...of loop
//for ...in loop 



//For loop example:

//For loop syntax:
// for (
//     [initialExpression];
//     [condition];
//     [incrementExpression];
// );

//create function to conform with modular code:
function forLoopExamp() {
  console.log('== HERE IS AN EXAMPLE OF A FOR LOOP: ==');
  for (let i = 0; i <= 10; i++) {
    console.log('Hello: ', i);
  };
};

//////////////////////////////////////////////////////////////////////////////

//Infinite loops:

//Infinite loop example:
//DO NOT RUN THIS CODE!!

//create function to conform with modular code:
// function infiniteLoop() {
//     for (let i = 20; i >= 0; i++) {
//         console.log(i);
//     };
// };

//////////////////////////////////////////////////////////////////////////////

//loops and arrays:
//example:
//create function to conform with modular code:
function arrayLoop() {
  let examScores = [98, 55, 45, 66, 88, 30];
  console.log('\n', '== HERE IS AN EXAMPLE OF A LOOPED ARRAY: ==');
  for (let i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]);
  };
};

//loops and objects:
//example:
//create function to conform with modular code:
function objectLoop() {
  const myStudents = [
    {
      firstname: 'Zeus',
      grade: 86
    },
    {
      firstname: 'Artemis',
      grade: 95
    },
    {
      firstname: 'Hera',
      grade: 76
    },
    {
      firstname: 'Apollo',
      grade: 90
    }
  ];
  console.log('\n', '== HERE IS AN EXAMPLE OF A LOOPED OBJECT: ==');
  for (let i = 0; i < myStudents.length; i++) {
    let grade = myStudents[i].grade,
      names = myStudents[i].firstname;
    console.log(`${names}'s grade is: ${grade}`);
  };

};

//////////////////////////////////////////////////////////////////////////////

//Nested For Loops:
//example1:
//create function to conform with modular code:
function displayNestedLoop1() {
  console.log('\n', '== HERE IS AN EXAMPLE OF A NESTED LOOP 1: ==', '\n', 'See the JS document for this example :)');
  // for (let i = 0; i <= 10; i++) {
  //   console.log('Outta Loop: ', i);
  //   for (let j = 10; j >= 0; j -= 2) {
  //     console.log('Inner Loop: ', j);
  //   };
  // };
};
//example2:
//create function to conform with modular code:
const gameBoard = [
  [4, 32, 8, 4],
  [64, 2, 32, 4],
  [16, 32, 8, 4],
  [4, 2, 8, 2],
];
let totalScore = 0,
  title = '== HERE IS AN EXAMPLE OF A NESTED LOOP 2 FINDING TOTALSCORE OF ARRAY VALUES: ==',
  results = 'The total score of the values inside the "gameboard" array is:';
function displayNestedLoop2() {
  for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++) {
      totalScore += row[j];
    };
  };
  console.log('\n', title, '\n', results, totalScore);
};
