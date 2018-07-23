// creating child process to handle computational blocking process by creating child process
var child_process = require('child_process');

console.log(1);

var newProcess= child_process.spawn('node', ['_fibonacci.js'],{

  stdio : 'inherit' // console log of child_process inside main console log
});

console.log(2);
