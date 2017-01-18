angular.module("eulernodeFrontend").factory("ProblemService", function() {

    var problemList = [];
    var ipc = require("electron").ipcRenderer;

    // Init stuff
    ipc.on("listOfSolvedProblems", function(event, args) {
		problemList = args;
	});
	ipc.send("getListOfSolvedProblems");

    return {
        getProblemList : function() {
            return problemList;
        },
        getProblem : function(id) {
            return problemList[id-1];
        }
    };
});