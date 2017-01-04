function BaseProblem(id,name) {
    this.id = id;
    this.solutions = [];
    this.inputFile;
    this.name = name;
}

BaseProblem.prototype = {
    addSolution: function(solution) {
        this.solutions.push(solution);
    },
    getId: function() {
        return this.id;
    },
    getSolutions: function() {
        return this.solutions;
    },
    setInputFile: function(file) {
        this.inputFile = file;
    },
    getName: function() {
        return this.name;
    }
}

/*
BaseProblem.prototype.addSolution = function(solution) {
    this.solutions.push(solution);
}

BaseProblem.prototype.getId = function() {
    return this.id;
}*/

module.exports = BaseProblem;