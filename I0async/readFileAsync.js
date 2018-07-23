// node JS module to read File asynschronous in fs
var fs = require('fs');

// named callback

var onFileLoad = function(err , file){
  console.log("Got the File");
  console.log(file);
};


console.log("Going to get a file");
fs.readFile('ic_launcher-web.png',onFileLoad);

console.log("App continue...");


// annoymous callback
/*

console.log("Going to get a file");
fs.readFile('readFileSync.js', function(err, file){
  console.log("Got the file");
});

console.log("App continue...");



*/
