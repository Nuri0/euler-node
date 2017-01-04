var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(42,"Coded triangle numbers");

var maxWordLength = 0;

var fs = require("fs");
var path = require("path");
var words = [];
var init = function() {
    words = fs.readFileSync(path.join(__dirname,"words.txt"),"utf-8").split(",");
    for (var i=0; i<words.length; i++) {
		words[i] = words[i].substring(1,words[i].length-1);
		maxWordLength = Math.max(maxWordLength,words[i]);
	}
}
init();

problem.addSolution(function() {
	
	// compute first 50 triangle numbers and save them in the "cache"
	var cache = [];
	for (var i=1; i<=50; i++) {
		cache[(i/2)*(i+1)] = true;
	}
	
	var count = 0;
	
	words.forEach(function(word) {
		if (!!cache[alphValue(word)]) {
			count++;
		}
	});
	
	return count;
});

var alphValue = function(word) {
	var sum = 0;
	for (var i=0; i<word.length; i++) {
		// Subtract 64 to normalize A=1 ... Z=26
		sum += word.charCodeAt(i) - 64;
	}
	return sum;
}

module.exports = problem;
