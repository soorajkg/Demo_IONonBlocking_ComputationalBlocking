// simple fibonacci in Java script
var stepcount =0;
var recursive = function(n) {

  if(n <= 2) {
    return 1;
  } else {

    return recursive(n - 1) + recursive(n - 2);
  }
  console.log(stepcount+1);
};

console.log(recursive(50));
