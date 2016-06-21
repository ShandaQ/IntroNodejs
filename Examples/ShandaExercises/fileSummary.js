// ## File Summary
//
// Write a program takes a file name as a command line argument, and prints to the terminal number of lines, and the number of characters in the file.Example output:
//
// $ node file-summary.js hello.txt
// Lines: 1
// Characters: 13

var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName, function(err, data){
  if(err){
    return console.error(err);
  }
  console.log("async reads: ", data.toString());
  var dataArray = data.toString().split("");
  console.log('number of characters: ', dataArray.length);

  //splint content into lines
  var lines = data.toString().split('\n');
  console.log('Lines: ', lines.length);
});
