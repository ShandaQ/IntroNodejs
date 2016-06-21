// ## Calculator
//
// Write a program that takes two numbers as command line arguments, and prints out the sum of the numbers. Example output:
//
// $ node calc.js 1 2
// 3
// $ node calc.js 9 2
// 11
//
// Bonus: allow the calculator to add any number of numbers:
//
// $ node calc.js 4 8 2 4
// 18

var firstCommandLineArgument = process.argv[2];
var secondCommandLineArgument = process.argv[3];

//console.log(Number(firstCommandLineArgument) + Number(secondCommandLineArgument));
//console.log(process.argv.length - 2);
var sum = 0;
for(var i = 2; i < process.argv.length; i++){
  sum += Number(process.argv[i]);
}
console.log('Sum: ', sum);

//reduce method to sum the
