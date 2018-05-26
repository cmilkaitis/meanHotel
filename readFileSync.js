var fs = require('fs');

console.log("Going to get a file");
let file = fs.readFileSync('readFileSync.js');
console.log("Got the file");

console.log("App continues...");