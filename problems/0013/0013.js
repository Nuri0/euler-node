var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(13);

var BigNumber = require("bignumber.js");

problem.setInputFile("0013.txt");

var fs = require("fs");
var path = require("path");
var inputNumbers = [];
var init = function() {
    var lines = fs.readFileSync(path.join(__dirname,"0013.txt"),"utf-8").split("\n");
    for (var i=0; i<lines.length; i++) {
        inputNumbers.push(new BigNumber(lines[i]));
    }
};
init();

problem.addSolution(function() {
    var sum = new BigNumber("0");
    for (var i=0; i<inputNumbers.length; i++) {
        sum = sum.add(inputNumbers[i]);
    }
    return sum.toString().substring(0,11).replace(".","");
});

module.exports = problem;