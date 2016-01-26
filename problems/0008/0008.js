var BaseProblem = require("../../BaseProblem");
var problem = new BaseProblem(8);

problem.setInputFile("0008.txt");

var fs = require("fs");
var path = require("path");
var digits;
var init = function() {
    digits = fs.readFileSync(path.join(__dirname,"0008.txt"),"utf-8");
    // remove all possible new line characters
    digits = digits.replace(/(\r\n|\n|\r)/gm,"");
}
init();

// A little more clever - with a queue
problem.addSolution(function() {
    var queue = [];
    var number = 1;
    var biggest = 0;
    
    for (var i=0; i<digits.length; i++) {
        var d = parseInt(digits[i]);
        if (d == 0) {
            number = 1;
            queue = [];
        } else {
            number *= d;
            queue.push(d);
            
            // if we have too much digits, divide with and delete the first element 
            if (queue.length > 13) {
                number /= queue.shift();
            }
            
            // check, if we got the maximum
            if (number > biggest) {
                biggest = number;
            }
        }
    }
    
    return biggest;
})

// Brute Force
problem.addSolution(function() {
    var biggest = 0;
    var number;
    for (var i=12; i<digits.length; i++) {
        number = 1;
        for (var j=i-12; j<=i; j++) {
            number *= parseInt(digits[j]);
        }
        if (number > biggest) {
            biggest = number;
        }
    }
    
    return biggest;
});

module.exports = problem;