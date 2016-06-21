// node filename.js

// process.argv[] is an array of all the command line arguments

//the 0th argv is actually the pathe to the node executable program
var nodeExecutablePath = process.argv[0];

// the 1st argv is the pathto the node program thats sbeing run , in this case 1-argv.js
var nodeProgramPath = process.argv[1];

// get the 2nd argv is actually the first command line argumnet
var firstCommandLineArgument = process.argv[2];

var secondCommandLineArgument = process.argv[3];

console.log('Node executable path: ', nodeExecutablePath);
console.log('Node program path: ', nodeProgramPath);
console.log('firstCommandLineArgument: ', firstCommandLineArgument);
console.log('secondCommandLineArgument: ', secondCommandLineArgument);
