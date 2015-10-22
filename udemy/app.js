// by default it look for js file mentioned in require
// so it will look for greet.js in current directory
var greet = require('./greet');
greet();

// if greetNew.js doesn't exists in current directory,
// it looks for greetNew folder and then index.js in that
var greetNew = require('./greetNew');
greetNew.ankush();
greetNew.ankit();