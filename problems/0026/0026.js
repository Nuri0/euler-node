var BaseProblem = require("../BaseProblem");
var problem = new BaseProblem(26);

problem.addSolution(function() {
    var maxFraction = 1000;
    var maxLength = -1;
    var number;
    
    for (var i = maxFraction; i > 1; i--) {
        var value = getLengthOfReciprocalCycle(i);
        if (value > maxLength) {
            maxLength = value;
            number = i;
        }
    }
    
    return number;
});

var getLengthOfReciprocalCycle = function(number) {
    var places = [];
    
    var remain = 1;
    var position;
    
    var value, rest;
    
    while ((position=checkForCycles(places)) == -1) {
        remain *= 10;
        
        value = Math.floor(remain/number);
        remain -= value*number;
        
        var newDecimal = {
            "decimal": value,
            "remainder": remain
        }
        
        places.push(newDecimal);
        
        if (value == 0 && remain == 0) {
            break;
        }
    }
    
    if (position == -1) {
        return -1
    } else {
        return places.length-position-1;
    }
}

// checks if there is a decimal place, that has the same decimal and remainder as the last one in the given list
// returns the position of said decimal place or -1 if none couldn't be found
var checkForCycles = function(list) {
    if (list.length == 0 || list.length == 1) {
        return -1;
    }
    
    var last = list[list.length-1];
    
    for (var i=0; i<list.length-1; i++) {
        var cur = list[i];
        if (cur.decimal == last.decimal && cur.remainder == last.remainder) {
            return i;
        }
    }
    
    return -1;
}

module.exports = problem;
