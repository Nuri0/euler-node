angular.module("eulernodeFrontend").factory("ProblemService", function() {

    var problemList = [];
    var ipc = require("electron").ipcRenderer;

    // Get the list of all problems at the beginning of the program
    ipc.on("listOfSolvedProblems", function(event, args) {
		problemList = args;
	});
	ipc.send("getListOfSolvedProblems");

    return {
        getProblemList : function() {
            return problemList;
        },
        getProblemById : function(id) {
			return problemList.filter(function(problem) {
				return problem.id == id;
			}).pop();
        }
    };
});
