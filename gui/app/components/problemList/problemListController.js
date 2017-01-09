angular.module("eulernodeFrontend").controller("ProblemListController", function($scope) {
    $scope.test = "Problems";

    const ipc = require("electron").ipcRenderer;

	ipc.on("listOfSolvedProblems", function(event, args) {
		$scope.problemList = args;
		$scope.$apply();
	});

	ipc.send("getListOfSolvedProblems");
});