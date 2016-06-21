// ## Reading a File (Sync)
//
// Write a program that takes a file name as a command line argument, reads that file and prints the contents of the file to the terminal. You will probably want to create a file for testing, for example, create a hello.txt file and put the text `Hello, world!` in it. You will use the fs.readFileSync() method to do this: https://nodejs.org/api/fs.html#fs_fs_readfilesync_file_options. Example output:
//
// $ node read-file.js hello.txt
// Hello, world!
// $ node read-file.js another-file.txt
// Some other text

// Reading a file - Synchronously

//note fs is a module with a method of readFileSync and readFile
var fs = require('fs');

var contents = fs.readFileSync('hello.txt', 'utf8');
console.log("Synchronously file reading: ", contents);
var syncFile = fs.readFileSync('randomText.txt');
console.log("Synchronously file reading: ", syncFile.toString());

// ## Reading a File (Async)
//
// Write the same program as the previous exercise. Except this time do it using the asynchronous API: fs.readFile(): https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback

// Reading a file - Asynchronously
fs.readFile('randomText.txt', function(err, data){
  if(err){
    return console.error(err);
  }
  console.log("async buffer reads: ", data);
  console.log("async reads: ", data.toString());
});

console.log("Print this out while we wait for the data to be returned from the Asynchronously readFile");

//read the contents of a directory
fs.readdir('./', function(err, data){
  //returns data as an array
  console.log(data);
});
