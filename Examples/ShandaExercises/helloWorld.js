// ## Hello world
//
// Write a program hello.js that prints "Hello, world!" to the terminal. Example output:
//
// $ node.js hello.js
// Hello, world!

console.log('Hello, world!');

// ## Hello to you
//
// Write a program that takes a name as a command line argument, and says hello to that name. For more information about how to get command line arguments: https://nodejs.org/docs/latest/api/process.html#process_process_argv. Example output:
//
// $ node hello2.js Jerry
// Hello, Jerry!
// $ node hello2.js Arnav
// Hello, Arnav!
var firstCommandLineArgument = process.argv[2];
console.log("Hello, ", firstCommandLineArgument + "!");
