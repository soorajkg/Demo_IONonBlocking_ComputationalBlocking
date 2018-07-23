// creating child process to handle computational blocking process by creating child process
// start sending data in stream as soon as the child process starts executing
var child_process = require('child_process');

console.log(1);

var newProcess= child_process.spawn('node', ['_fibonacci.js']);

newProcess.stdout.on('data', function(data){
  console.log('stdout :' +data);
});

console.log(2);
