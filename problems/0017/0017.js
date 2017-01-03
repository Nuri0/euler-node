var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(17);

var numberLengths = require("./0017.json");

problem.addSolution(function() {
    var count = 11; // "one thousand"
    for (var i=1; i < 1000; i++) {
        
        count += getLetterCount(i);
        
    }
    
    return count;
});

var getLetterCount = function(number) {
    var count = 0;
    
    var str = String(number);
    
    var hundreds = Number(str.charAt(str.length-3));
    var tens = Number(str.charAt(str.length-2));
    var ones = Number(str.charAt(str.length-1));
    
    if (hundreds > 0) {
        count += numberLengths["100"];
        count += numberLengths[hundreds];
        
        if (tens != 0 || ones != 0) {
            count += 3; // "and"
        }
        
    }
    
    if (tens >= 2) {
        count += numberLengths["" + (tens*10)];
        
        count += numberLengths[ones];
    } else { // numbers from 1-19
        count += numberLengths["" + (tens*10 + ones)];
    }
    
    return count;
}

module.exports = problem;
