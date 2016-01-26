function BaseProblem(id) {
    this.id = id;
    this.solutions = [];
    this.inputFile;
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