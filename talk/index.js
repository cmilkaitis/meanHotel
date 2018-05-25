let filename = "index.js";

let hello = function(name) {
    console.log("Hello " + name);
};

let intro = function() {
    console.log("I'm a node fille called " + filename);
};

module.exports = {
    hello : hello,
    intro: intro
};