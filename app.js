require('./instantHello');
let goodbye = require('./talk/goodbye');
let talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello("Deee");

let answer = question.ask("What is the meaing of anything?");
console.log(answer);

goodbye();