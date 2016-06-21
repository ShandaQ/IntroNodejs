// ## Convert a file to Uppercase
//
// Same as the previous program, using the fs.readFile to read the contents of the file. But this time print out the contents of the file in ALL CAPS. Example output:
//
// $ node read-file-all-caps.js hello.txt
// HELLO, WORLD!
// $ node read-file-all-caps.js another-file.txt
// SOME OTHER TEXT

var fs = require('fs');
var fileName = 'randomText.txt';

 fs.readFile(fileName, function(err, data){
   if(err){
     return console.log(err);
   }
  //  console.log(data.toString().toUpperCase());

  // ## Convert a file to Uppercase (2)
  //
  // Like the previous problem, but this write out the uppercased version to the same file - overwriting it.
   var capData = data.toString().toUpperCase();
   fs.writeFile(fileName, capData, function(err){
     if(err){
       return console.log(err);
     }
     console.log("Wrote this: ", capData, " to the file: " + fileName);
   });

 });
