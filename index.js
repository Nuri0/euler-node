var path = require("path");

var problemNumber = 7;
var problemString = ("0000" + problemNumber).substr(-4,4);

var problemPath = "./problems/" + problemString + "/" + problemString;
var problem = require(problemPath);
console.log(problem.getId())

var iterations = 10;
var solutions = problem.getSolutions();


solutions.forEach(function(element, index) {
    console.time("solution." + index);
    for (var i=0; i<iterations;i++) {
        element();
    }
    console.timeEnd("solution." + index);
});
console.log(solutions[0]());