angular.module("eulernodeFrontend").controller("ProblemController", function($stateParams, $scope, ProblemService) {
    
    var ipc = require("electron").ipcRenderer;

    $scope.problem = ProblemService.getProblemById($stateParams.problemId);

    $scope.runSolution = function(solutionId) {
        ipc.send("runProblemSolution",$scope.problem.id,solutionId);
    }

	ipc.on("getProblemSolution", function(event, result) {
		$scope.$apply(function() {
			$scope.problemSolution = result;
		});
	});
	
	$scope.$on("$destroy", function() {
		ipc.removeAllListeners("getProblemSolution");
	});
});
