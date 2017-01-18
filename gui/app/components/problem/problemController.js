angular.module("eulernodeFrontend").controller("ProblemController", function($stateParams, $scope, ProblemService) {
    console.log($stateParams);
    
    const ipc = require("electron").ipcRenderer;

    $scope.problem = ProblemService.getProblem($stateParams.problemId);

    $scope.runSolution = function(solutionId) {
        ipc.send("runProblemSolution",$scope.problem.id,solutionId);
    }

	ipc.on("getProblemSolution", function(event, result) {
		console.log(result);
	});
});