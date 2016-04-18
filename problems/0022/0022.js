var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(22);

var fs = require("fs");
var path = require("path");
var names = [];
var init = function() {
    names = fs.readFileSync(path.join(__dirname,"names.txt"),"utf-8").split(",");
    for (var i=0; i<names.length; i++) {
		names[i] = names[i].substring(1,names[i].length-1);
	}
	names.sort();
}
init();

problem.addSolution(function() {
	var sum = 0;
	for (var i=0; i<names.length; i++) {
		sum += (i+1) * alphValue(names[i]);
	}
	return sum;
});

var alphValue = function(name) {
	var sum = 0;
	for (var i=0; i<name.length; i++) {
		// Subtract 64 to normalize A=1 ... Z=26
		sum += name.charCodeAt(i) - 64;
	}
	return sum;
}

module.exports = problem;
