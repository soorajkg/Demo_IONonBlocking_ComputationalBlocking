// node JS module to read File in fs
var fs = require('fs');

console.log("Going to get a file");
var file = fs.readFileSync('ic_launcher-web.png');
console.log("got the file");
console.log(file);

console.log("App continue...");
