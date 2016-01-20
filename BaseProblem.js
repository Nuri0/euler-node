function BaseProblem(id) {
    this.id = id;
    this.solutions = [];
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