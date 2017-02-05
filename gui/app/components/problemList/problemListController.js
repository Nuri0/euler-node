angular.module("eulernodeFrontend").controller("ProblemListController", function($scope,ProblemService) {

    const ipc = require("electron").ipcRenderer;

	$scope.problemList = ProblemService.getProblemList();
/*
	ipc.on("listOfSolvedProblems", function(event, args) {
		$scope.problemList = args;
		$scope.$apply();
	});

	ipc.send("getListOfSolvedProblems");*/
});