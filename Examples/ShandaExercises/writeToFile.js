// ## Writing a File
//
// Write a program that takes some text via a command line argument, and saves it to a file called data.txt. Example:
//
// $ node save.js "Hello, world!"
//
// The file data.txt should now contain the words: Hello, world!

//Note: if the file exsits it will override the file
// if the file does not exist it will create a new file
var fs = require('fs');
var contents = ' override file with this text';
var fileName = 'writeTofile.txt';

fs.writeFile(fileName, contents, function(err){
  if(err){
    return console.log(err);
  }
  console.log("Wrote this to the file: " + fileName);
});

fs.readFile('writeTofile.txt', function(err, data){
  if(err){
    return console.error(err);
  }
  console.log("after new text added, file reads: ", data.toString());
});
